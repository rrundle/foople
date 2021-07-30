import { baseUri } from '../config'

const getPayments = () => async (dispatch, getState) => {
  const {
    authData: { stripeId },
  } = getState()

  const options = {
    method: 'GET',
    body: JSON.stringify({
      customerId: stripeId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await fetch(`${baseUri}/payment/get-payments`, options)
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

export default getPayments
