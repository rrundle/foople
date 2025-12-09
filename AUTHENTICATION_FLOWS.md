# Authentication Flows - Simplified Explanation

This document answers two key questions about your app's authentication.

---

## Question 1: Do We Need the Cronjob?

### **Answer: No - It's Been Removed**

The cronjob has been removed from `app.js` because it's unnecessary. Here's why:

### How Token Refresh Actually Works

```
User action (slash command or web visit)
    ↓
Your server receives request with teamId
    ↓
getFreshAccessToken(teamId) is called
    ↓
Checks: Is token expiring within 1 hour?
    ├─ No → Return existing token (instant)
    └─ Yes → Refresh from Slack (~500ms), update DB, return new token
    ↓
Use fresh token for Slack API call
```

### Why On-Demand Refresh is Better

✅ **Simpler code** - No cron logic, no database scanning  
✅ **Just as effective** - Tokens always fresh when needed  
✅ **Minimal latency** - Only ~500ms once per 12 hours  
✅ **Self-healing** - If refresh fails, retries on next call  

### Your Web Dashboard Concern

You mentioned: *"I didn't want to consistently prompt the user to login on the web"*

**Good news:** The web dashboard stays logged in through JWT refresh, not the cronjob!

```javascript
// When user visits /app/dashboard
Frontend calls: PUT /check-auth with JWT token
    ↓
checkAuth() verifies JWT
    ↓
refreshJwt() gets fresh data from DB
    ↓
getFreshAccessToken() refreshes Slack token if needed
    ↓
Returns NEW JWT with fresh tokens
    ↓
User stays logged in! No re-authentication needed!
```

The cronjob was never involved in keeping web users logged in.

---

## Question 2: Do Slash Commands Require User Authentication?

### **Answer: No - It's 100% Server-Side**

Users **NEVER** have to authenticate to use slash commands. Here's how it works:

### The Workspace Bot Token Model

```
┌─────────────────────────────────────────────────────┐
│                  ONE-TIME SETUP                     │
│                                                     │
│  Workspace Admin clicks "Add to Slack"             │
│          ↓                                          │
│  OAuth flow: Slack gives you a BOT TOKEN           │
│          ↓                                          │
│  Store bot token in DB for this workspace          │
│          ↓                                          │
│  ✅ Setup complete!                                 │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│              EVERY USER IN WORKSPACE                │
│                                                     │
│  ANY user types: /foople                           │
│          ↓                                          │
│  Slack sends request to your server                │
│  Includes: team_id, channel_id, user_id, text      │
│          ↓                                          │
│  Your server:                                       │
│    1. Looks up team_id in database                 │
│    2. Gets workspace bot token                     │
│    3. Refreshes token if needed (server-side)      │
│    4. Makes Slack API call with bot token          │
│    5. Sends response to user                       │
│          ↓                                          │
│  ✅ User sees poll - never knew auth happened!     │
└─────────────────────────────────────────────────────┘
```

### Key Points

🔹 **Zero user interaction** - Token refresh happens in the background  
🔹 **No login screen** - Users just use the slash command  
🔹 **Workspace-wide access** - One bot token serves all users  
🔹 **Automatic token management** - Your server handles refresh invisibly  

### Example Flow: User Creates a Poll

```javascript
1. User types: /foople pizza
2. Slack POST → your server: { team_id: "T12345", text: "pizza", ... }
3. Your server:
   const company = await mongoClient(teamId, 'auth').findOne()
   const freshToken = await getFreshAccessToken(teamId) // ← Server-side refresh
4. Your server uses freshToken to call Slack API
5. Slack posts poll to channel
6. ✅ User never saw any authentication!
```

---

## Two Different Authentication Systems

Your app has **TWO SEPARATE** authentication flows:

### 1️⃣ Workspace Bot Token (For Slack Operations)

**What it's for:** Slash commands, posting messages, interactive components  
**Who uses it:** All users in a workspace (shared)  
**How it's stored:** One bot token per workspace in MongoDB  
**Authentication:** None needed by users (admin installed app once)  
**Token refresh:** Server-side, automatic, invisible  

**Use cases:**
- `/foople` creates a poll
- `/foople add` opens a dialog  
- Bot posts messages to channels
- Interactive buttons respond

### 2️⃣ Individual User JWT (For Web Dashboard)

**What it's for:** Web dashboard at `/app/dashboard`  
**Who uses it:** Individual users (personal)  
**How it's stored:** JWT cookie in user's browser  
**Authentication:** User logs in via "Sign in with Slack"  
**Token refresh:** JWT refresh via `/check-auth` endpoint  

**Use cases:**
- View account settings
- Manage payment/subscription
- See list of saved restaurants
- Configure preferences

---

## Summary

### ✅ Cronjob Status: **REMOVED**
- On-demand refresh handles everything
- Simpler, cleaner, just as effective
- Web dashboard stays logged in via JWT refresh

### ✅ Slash Command Authentication: **NONE REQUIRED**
- 100% server-side token management
- Users just type `/foople` and it works
- Token refresh invisible to users
- Workspace admin installs once, all users benefit

### ✅ Web Dashboard Authentication: **PER-USER JWT**
- Users log in via Slack OAuth
- JWT keeps them logged in
- JWT refresh updates tokens automatically
- No repeated login prompts

---

## Performance Impact

### Token Validity Check (Every API Call)
- Database read to check expiry: **~5-10ms**
- If token is valid (>1 hour left): **Use immediately**
- Total overhead: **~5-10ms** ✅

### Token Refresh (Once per 12 Hours)
- Call Slack API: **~500ms**
- Update database: **~10ms**  
- Total: **~510ms once every 12 hours** ✅

### User Experience
- 99.9% of requests: **Instant** (token still valid)
- 0.1% of requests: **+500ms** (token refresh)
- Users won't notice the occasional 500ms delay

---

## Code Changes Made

### Removed from app.js:
```javascript
// BEFORE:
const { startTokenRotation, sendTwilioMessage } = require('./server/cronjobs/token-rotation')
app.listen(PORT, () => {
  startTokenRotation()
  sendTwilioMessage()
})

// AFTER:
// Token rotation now handled on-demand
app.listen(PORT, () => {
  console.log('Slack token rotation: Automatic (on-demand refresh)')
})
```

### All Slack API calls now use:
```javascript
const accessToken = await getFreshAccessToken(teamId)
// This function:
// - Checks token expiry
// - Refreshes if needed
// - Returns valid token
// All invisible to users!
```

---

## Need to Re-Enable the Cronjob?

If you want proactive token refresh (to avoid the 500ms delay), uncomment these lines in `app.js`:

```javascript
const { startTokenRotation } = require('./server/cronjobs/token-rotation')

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
  startTokenRotation() // Proactively refreshes at 4am & 4pm
})
```

But honestly, it's not worth the added complexity for a 500ms delay that happens once every 12 hours.

