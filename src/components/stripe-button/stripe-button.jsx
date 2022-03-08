import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51KbB8ABI9lEHcrb3jnjBfi6Ig8AM0Em3PQBCcLUYTQ2ZGn4VW4FRQitHyOHuuhUhGhEF3w1IA8p2S3VNxirz1RL40020kED0sS'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='suburban outfitters'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton