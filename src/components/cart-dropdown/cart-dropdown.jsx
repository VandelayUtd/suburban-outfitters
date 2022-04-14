import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropDown = () => { 

    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();
    const handleGoToCheckout = () => {
        navigate('/checkout')
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                    <CartItem cartItem={cartItem} key={cartItem.id} />))
                    ) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropDown;