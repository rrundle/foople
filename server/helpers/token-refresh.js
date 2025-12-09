const fetch = require('node-fetch')
const FormData = require('form-data')
const { mongoClient } = require('../database')

// In-memory cache for tokens to avoid slow MongoDB queries on critical paths
// Cache structure: { teamId: { token: string, expiresAt: Date, cachedAt: Date } }
const tokenCache = new Map()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

/**
 * Gets a fresh Slack access token for a workspace
 * Checks if token is expired or expiring soon, refreshes if needed
 * @param {string} teamId - Slack team/workspace ID
 * @param {boolean} skipCache - Skip in-memory cache (for critical timing paths)
 * @returns {Promise<string|null>} Fresh access token or null if refresh fails
 */
const getFreshAccessToken = async (teamId, skipCache = false) => {
  const startTime = Date.now()
  if (!teamId) {
    console.error('getFreshAccessToken: teamId is required')
    return null
  }

  // Check in-memory cache first (for fast path - avoiding slow MongoDB queries)
  if (!skipCache && tokenCache.has(teamId)) {
    const cached = tokenCache.get(teamId)
    const cacheAge = Date.now() - cached.cachedAt.getTime()

    // Use cache if less than 5 minutes old and token not expiring soon
    if (
      cacheAge < CACHE_TTL &&
      cached.expiresAt &&
      cached.expiresAt > new Date(Date.now() + 60 * 60 * 1000)
    ) {
      console.log(
        `[${teamId}] Using in-memory cache (age: ${Math.round(
          cacheAge / 1000,
        )}s, took ${Date.now() - startTime}ms)`,
      )
      return cached.token
    }
  }

  try {
    const authCollection = await mongoClient(teamId, 'auth')
    const [company] = await authCollection.find({ name: 'admin' }).toArray()

    if (!company) {
      console.error(`getFreshAccessToken: No company found for team ${teamId}`)
      return null
    }

    const {
      access_token: accessToken,
      refresh_token: refreshToken,
      token_expires_at: tokenExpiresAt,
    } = company

    // If no refresh token, we're using old-style tokens (shouldn't happen with token rotation enabled)
    if (!refreshToken) {
      console.warn(
        `getFreshAccessToken: No refresh token for team ${teamId}, using existing access token`,
      )
      return accessToken
    }

    // Check if token is expired or expiring soon (within 1 hour)
    const now = new Date()
    const expiryDate = tokenExpiresAt ? new Date(tokenExpiresAt) : null
    const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000)

    // If token is still valid for more than 1 hour, return it
    if (expiryDate && expiryDate > oneHourFromNow) {
      console.log(
        `[${teamId}] Token is fresh, returning from DB (took ${
          Date.now() - startTime
        }ms)`,
      )

      // Update in-memory cache for next time
      tokenCache.set(teamId, {
        token: accessToken,
        expiresAt: expiryDate,
        cachedAt: new Date(),
      })

      return accessToken
    }

    // Token is expired or expiring soon, refresh it
    console.log(
      `[${teamId}] Refreshing Slack token (expires: ${expiryDate}) - THIS WILL TAKE ~500ms`,
    )
    const refreshStartTime = Date.now()
    const newTokenData = await refreshSlackToken(refreshToken, teamId)
    console.log(
      `[${teamId}] Token refresh took ${Date.now() - refreshStartTime}ms`,
    )

    if (!newTokenData) {
      console.error(
        `getFreshAccessToken: Failed to refresh token for team ${teamId}`,
      )
      // Return old token as fallback (may fail but worth trying)
      return accessToken
    }

    // Update database with new token data
    const updateResult = await authCollection.updateOne(
      { name: 'admin' },
      {
        $set: {
          access_token: newTokenData.access_token,
          refresh_token: newTokenData.refresh_token,
          token_expires_at: newTokenData.token_expires_at,
          token_last_refreshed: new Date(),
        },
      },
    )

    if (updateResult.modifiedCount === 0) {
      console.warn(
        `getFreshAccessToken: Token refresh succeeded but database update failed for team ${teamId}`,
      )
    }

    console.log(
      `[${teamId}] getFreshAccessToken completed in ${
        Date.now() - startTime
      }ms`,
    )

    // Update in-memory cache
    tokenCache.set(teamId, {
      token: newTokenData.access_token,
      expiresAt: newTokenData.token_expires_at,
      cachedAt: new Date(),
    })

    return newTokenData.access_token
  } catch (error) {
    console.error(`getFreshAccessToken error for team ${teamId}:`, error)
    return null
  }
}

/**
 * Calls Slack's oauth.v2.access endpoint to refresh a token
 * @param {string} refreshToken - The refresh token
 * @param {string} teamId - Team ID for logging purposes
 * @returns {Promise<Object|null>} Object with access_token, refresh_token, and token_expires_at
 */
const refreshSlackToken = async (refreshToken, teamId = 'unknown') => {
  try {
    const formdata = new FormData()
    formdata.append('client_id', process.env.CLIENT_ID)
    formdata.append('client_secret', process.env.CLIENT_SECRET)
    formdata.append('grant_type', 'refresh_token')
    formdata.append('refresh_token', refreshToken)

    const requestOptions = {
      method: 'POST',
      body: formdata,
    }

    const response = await fetch(
      'https://slack.com/api/oauth.v2.access',
      requestOptions,
    )
    const result = await response.json()

    if (!result.ok) {
      console.error(
        `refreshSlackToken failed for team ${teamId}:`,
        result.error,
      )
      return null
    }

    // Slack returns expires_in (seconds until expiry)
    const expiresIn = result.expires_in || 43200 // Default 12 hours if not provided
    const expiresAt = new Date(Date.now() + expiresIn * 1000)

    return {
      access_token: result.access_token,
      refresh_token: result.refresh_token,
      token_expires_at: expiresAt,
      expires_in: expiresIn,
    }
  } catch (error) {
    console.error(`refreshSlackToken error for team ${teamId}:`, error)
    return null
  }
}

/**
 * Gets the bot user ID and access token for a team
 * This is useful for bot API calls vs user API calls
 * @param {string} teamId - Slack team/workspace ID
 * @returns {Promise<Object>} Object with accessToken and botUserId
 */
const getBotTokenInfo = async (teamId) => {
  const accessToken = await getFreshAccessToken(teamId)

  // Get bot user ID from database if available
  const authCollection = await mongoClient(teamId, 'auth')
  const [company] = await authCollection.find({ name: 'admin' }).toArray()

  return {
    accessToken,
    botUserId: company?.bot_user_id || null,
  }
}

module.exports = {
  getFreshAccessToken,
  refreshSlackToken,
  getBotTokenInfo,
}
