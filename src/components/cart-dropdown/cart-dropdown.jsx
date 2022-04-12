import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.styles.scss';

const CartDropDown = () => { 

    const { cartItems } = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
                {cartItems.map(cartItem => (
                    <CartItem cartItem={cartItem} key={cartItem.id} />
                    )
                )}
            <Link to='/checkout' >
                <Button >GO TO CHECKOUT</Button>
            </Link>
        </div>
    )
};

export default CartDropDown;