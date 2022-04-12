import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.styles.scss';

const CartDropDown = () => { 

    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();
    const handleGoToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
                {cartItems.map(cartItem => (
                    <CartItem cartItem={cartItem} key={cartItem.id} />
                    )
                )}
            <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
        </div>
    )
};

export default CartDropDown;