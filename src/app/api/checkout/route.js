import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe securely using the secret key from your .env.local file
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { priceId, planName } = body;

    // We define the prices dynamically here for this portfolio project.
    // In a massive app, these would live inside your Stripe Dashboard.
    // Note: Stripe calculates in the smallest currency unit (pennies). So 1000 = £10.00
    const prices = {
      'day-pass': 1000, 
      'monthly': 4500,  
      'annual': 45000,  
    };

    // Create the secure Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `Ironworks Gym - ${planName}`,
            },
            unit_amount: prices[priceId],
          },
          quantity: 1,
        },
      ],
      mode: 'payment', // Use 'subscription' here if you want recurring monthly billing later
      success_url: `${request.headers.get('origin')}/?success=true`,
      cancel_url: `${request.headers.get('origin')}/?canceled=true`,
    });

    // Send the unique checkout URL back to the frontend
    return NextResponse.json({ url: session.url });
    
  } catch (error) {
    console.error('Stripe Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}