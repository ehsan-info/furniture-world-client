import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const orders = useLoaderData();
    console.log(orders);
    const { product_name, product_price } = orders;
    return (

        <div>
            <h3 className='text-3xl'>Payment for {product_name}</h3>
            <p className="text-xl">Please pay <strong>${product_price}</strong> for your product</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        orders={orders}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;