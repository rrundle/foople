import { baseUri } from '../config'

const createSubscription = (paymentInfo) => async (dispatch, getState) => {
  const {
    authData: { stripeId, status, teamId, trialPeriodStart },
  } = getState()

  const { id = '' } = paymentInfo

  const options = {
    method: 'POST',
    body: JSON.stringify({
      paymentMethodId: id,
      customerId: stripeId,
      status,
      teamId,
      trialPeriodStart,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  console.log('options', options)

  try {
    const response = await fetch(
      `${baseUri}/payment/create-subscription`,
      options,
    )
    console.log('response', response)
    const body = await response.json()
    console.log('body', body)
    return body
  } catch (err) {
    console.error(err)
    return {
      authed: false,
      message: err,
    }
  }
}

export default createSubscription
