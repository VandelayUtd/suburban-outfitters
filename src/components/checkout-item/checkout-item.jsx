import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles'

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
        <CheckoutItemContainer key={id}>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={handleDecrease}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={handleIncrease}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>${price}</BaseSpan>
            <RemoveButton onClick={handleRemove}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem