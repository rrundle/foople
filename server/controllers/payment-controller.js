const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

const { mongoClient } = require('../database')
const { daysLeftInTrial } = require('../helpers/trial-calculations')
const { AccountStatus } = require('../constants')

const createSubscription = async (req, res) => {
  const {
    customerId = '',
    paymentMethodId = '',
    status = '',
    teamId = '',
    trialPeriodStart = null,
  } = req.body
  if (status === AccountStatus.Active)
    throw new Error('Account already active, paymeny not needed')
  try {
    // Attach the payment method to the customer
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    })

    // Change the default invoice settings on the customer to the new payment method
    await stripe.customers.update(customerId, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    })

    // Create the subscription
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: 'price_1GqkzjAdnCjPNFayzpl0BIAa' }],
      expand: ['latest_invoice.payment_intent'],
      trial_period_days: daysLeftInTrial(trialPeriodStart),
    })

    // Save the subscription info in the db, update to active
    const userCollection = await mongoClient(teamId, 'auth')
    userCollection.updateOne(
      {},
      {
        $set: {
          subscriptionId: subscription.id,
          status: AccountStatus.Active,
        },
      },
    )

    res.status('200').send(subscription)
  } catch (err) {
    return res.status('402').send({ error: { message: err.message } })
  }
}

const updateSubscription = async (req, res) => {
  const { paymentMethodId = '', teamId = '', customerId = '' } = req.body
  try {
    // Create the subscription
    // Attach the payment method to the customer
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    })

    // Change the default invoice settings on the customer to the new payment method
    await stripe.customers.update(customerId, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    })

    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    })

    // Save the subscription info in the db, update to active
    const userCollection = await mongoClient(teamId, 'auth')
    userCollection.updateOne(
      {},
      { $set: { paymentMethods: paymentMethods.data } },
    )

    res.status('200').send(paymentMethods.data)
  } catch (err) {
    return res.status('402').send({ error: { message: err.message } })
  }
}

const cancelSubscription = async (req, res) => {
  const { teamId = '', subscriptionId = null } = req.body
  try {
    // Create the subscription
    const subscription = await stripe.subscriptions.del(subscriptionId)

    // Save the subscription info in the db, update to active
    const userCollection = await mongoClient(teamId, 'auth')
    userCollection.updateOne(
      {},
      {
        $set: {
          subscriptionId: null,
          status: AccountStatus.Canceled,
        },
      },
    )

    res.status('200').send(subscription)
  } catch (err) {
    return res.status('402').send({ error: { message: err.message } })
  }
}

const getPaymentMethods = async (req, res) => {
  const { customerId = '' } = req.body

  try {
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    })
    res.status('200').send(paymentMethods.data)
  } catch (err) {
    console.error('err', err)
  }
}

module.exports = {
  createSubscription,
  updateSubscription,
  cancelSubscription,
  getPaymentMethods,
}
