import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
    TestWarning,
  } from './checkout.styles';


const CheckoutPage = () => {
    
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <Total>
                <span>TOTAL: ${cartTotal}</span>
            </Total>
            <TestWarning>
                *Please use the following test credit card for payments*
                <br/>
                4242-4242-4242-4242 03/20 123
            </TestWarning>
            <StripeCheckoutButton price={cartTotal}/>
        </CheckoutContainer>
    );
};

export default CheckoutPage;