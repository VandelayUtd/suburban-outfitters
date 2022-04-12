import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import './checkout.styles.scss';


const CheckoutPage = () => {
    
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <div className='total'>
                <span>TOTAL: ${cartTotal}</span>
            </div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br/>
                4242-4242-4242-4242 03/20 123
            </div>
            <StripeCheckoutButton price={10}/>
        </div>
    );
};

export default CheckoutPage;