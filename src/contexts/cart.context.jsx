import { createContext, useState, useEffect } from 'react';

const findOrAddCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(item => item.id === productToAdd.id)

    if(existingCartItem) { 
        return cartItems.map(cartItem => 
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1}]
}

const decreaseCartItem = (cartItems, product) => {
    return cartItems.map(item => 
        item.id === product.id
        ? {...item, quantity: item.quantity - 1}
        : item   
    )
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0 
})

export const CartProvider = ({children}) => {
const [isCartOpen, setIsCartOpen] = useState(false)
const [cartItems, setCartItems] = useState([])
const [cartCount, setCartCount] = useState(0)

useEffect(()=> {
    const newCartCount = cartItems.reduce(
        (accum, currentEl) => 
             accum + currentEl.quantity
        , 0 
    )
    setCartCount(newCartCount)
}, [cartItems])


const addItemToCart = (productToAdd) => {
    setCartItems(findOrAddCartItem(cartItems, productToAdd))
}

const decreaseItemFromCart = (productToDecrease) => {
    const product = cartItems.find(item => item.id === productToDecrease.id)
    setCartItems(decreaseCartItem(cartItems, product))
}

const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, decreaseItemFromCart}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}