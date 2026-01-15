import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  try {
    const { items } = req.body
    // For demo purposes, expect items to be an array of { price: string, quantity: number }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items || [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Demo product' },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    })

    return res.status(200).json({ id: session.id })
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ statusCode: 500, message: err.message })
  }
}