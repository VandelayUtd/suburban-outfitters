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

const decreaseCartItem = (cartItems, cartItemToDecrement) => {

    const existingCartItem = cartItems.find(
        item => item.id === cartItemToDecrement.id
    );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrement.id);
    };


    return cartItems.map(item => 
        item.id === cartItemToDecrement.id
        ? {...item, quantity: item.quantity - 1}
        : item   
    )
}



const removeCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter(item => 
        item.id !== cartItemToRemove.id    
    )
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    decreaseItemFromCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0 
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

useEffect(()=> {
    const newCartCount = cartItems.reduce(
        (accum, currentEl) => 
             accum + currentEl.quantity
        , 0 
    )
    
    setCartCount(newCartCount)
}, [cartItems])

useEffect(() => {
    const newCartTotal = cartItems.reduce(
        (accum, currentEl) => 
            accum + (currentEl.price * currentEl.quantity)
            , 0
    )
    setCartTotal(newCartTotal)
}, [cartItems])

const addItemToCart = (productToAdd) => {
    setCartItems(findOrAddCartItem(cartItems, productToAdd))
}

const decreaseItemFromCart = (productToDecrease) => {
    setCartItems(decreaseCartItem(cartItems, productToDecrease))
}

const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
}

const value = {
    isCartOpen, 
    setIsCartOpen,
    addItemToCart, 
    cartItems,
    cartCount,
    decreaseItemFromCart,
    cartTotal,
    removeItemFromCart
}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}