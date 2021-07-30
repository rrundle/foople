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
  console.log('options', options)

  try {
    const response = await fetch(
      `${baseUri}/payment/update-subscription`,
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

export default updateSubscription
