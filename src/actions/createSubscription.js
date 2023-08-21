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

  try {
    const response = await fetch(`/payment/create-subscription`, options)
    const body = await response.json()
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
