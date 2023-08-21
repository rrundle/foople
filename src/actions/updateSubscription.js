import { baseUri } from '../config'

const updateSubscription = (paymentInfo) => async (dispatch, getState) => {
  const {
    authData: { teamId, stripeId },
  } = getState()

  const { id = '' } = paymentInfo

  const options = {
    method: 'POST',
    body: JSON.stringify({
      customerId: stripeId,
      paymentMethodId: id,
      teamId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await fetch(`/payment/update-subscription`, options)
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

export default updateSubscription
