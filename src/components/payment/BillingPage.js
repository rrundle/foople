import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { config } from '../../config'
import createSubscription from '../../actions/createSubscription'
import updateSubscription from '../../actions/updateSubscription'
import getPayments from '../../actions/getPayments'
import { AccountStatus } from '../../constants//accountStatus'

const stripePromise = loadStripe(config.get('stripeKey'))

const mapStateToProps = ({ authData = {} }) => ({ authData })

const mapDispatchToProps = (dispatch) => ({
  createSub: (value) => dispatch(createSubscription(value)),
  updateSub: (value) => dispatch(updateSubscription(value)),
  getPayments: () => dispatch(getPayments()),
})

const CheckoutForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({ authData, createSub, editPayment, updateSub }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      })
      if (error) {
        throw new Error('error processing card')
      }
      editPayment ? updateSub(paymentMethod) : createSub(paymentMethod)
      error && setError(false)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  )
})

const Payment = ({ authData, getPayments }) => {
  const [editPayment, setEditPayment] = useState(false)

  useEffect(() => {
    getPayments()
  }, [])

  const handlePaymentEdit = () => {
    setEditPayment(true)
  }

  const onCancelEdit = () => {
    setEditPayment(false)
  }

  return (
    <div>
      <div>
        <h3>{`Account Status: ${authData.status}`}</h3>
      </div>
      {authData.status === AccountStatus.Active && !editPayment ? (
        <div>
          <div>Card ending in 1234</div>
          <button onClick={handlePaymentEdit}>Edit</button>
        </div>
      ) : (
        <div className="container-fluid credit-card">
          <div className="row">
            {/* <!-- Individual column searching (text inputs) Starts--> */}
            <div className="col-xl-8">
              {editPayment && <button onClick={onCancelEdit}>cancel</button>}
              <div className="card height-equal">
                <div className="card-header">
                  <h5>Credit card </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <Elements stripe={stripePromise}>
                      <CheckoutForm editPayment={editPayment} />
                    </Elements>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
