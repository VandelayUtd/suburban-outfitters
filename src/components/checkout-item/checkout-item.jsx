import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {

    const { addItemToCart, decreaseItemFromCart, removeItemFromCart } = useContext(CartContext)

    const { name, price, imageUrl, id, quantity} = cartItem 

    const handleIncrease = () => {
        addItemToCart(cartItem)
    }

    const handleDecrease = () => {
        decreaseItemFromCart(cartItem)
    }

    const handleRemove = () => { 
        removeItemFromCart(cartItem)
    }

    return (
        <div className='checkout-item-container' key={id}>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={handleDecrease}>
                    &#10094;
                </div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={handleIncrease}>
                    &#10095;
                </div>
            </div>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={handleRemove}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem