import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {

    const { addItemToCart, decreaseItemFromCart } = useContext(CartContext)

    const { name, price, imageUrl, id, quantity} = cartItem 

    const handleIncrease = () => {
        addItemToCart(cartItem)
    }

    const handleDecrease = () => {
        decreaseItemFromCart(cartItem)
    }

    return (
        <div className='checkout-item-container' key={id}>
            <img src={imageUrl} alt={name} />
            <span className='description'>{name}</span>
            <button className='decrease-item' onClick={handleDecrease}>DECREASE</button>
            <span className='quantity'>{quantity}</span>
            <button className='increase-item' onClick={handleIncrease}>INCREASE</button>
            <span className='price'>${price}</span>
            <button className='remove'>X</button>
        </div>
    )
};

export default CheckoutItem