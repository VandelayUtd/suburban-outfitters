import React, { Fragment, useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'

import {NavigationContainer, NavLinks, NavLink, LogoContainer, Logo} from './navigation.styles';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const { isCartOpen } = useContext(CartContext);

    const handleToggle = () => {
        console.log('hit')
    }

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo>SUBURBAN OUTFITTERS</Logo>
                </LogoContainer>
                <NavLinks >
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser} className='option' >SIGN OUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
};


export default Navigation;
