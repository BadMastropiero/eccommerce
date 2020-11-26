import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HrZvaBMebzSoBHDQ8hdBQfLju7czgNrwN5UFkDBbCXjRhAOLLr9VZoXjGQzOPzmykrJxBZGidewO6gSNjtus5qs00Q7Cc74B8';

    const onToken = token => {
        console.log(token);
        alert('Paymant Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRW Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
