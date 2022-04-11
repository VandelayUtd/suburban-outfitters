import React, { Fragment, useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const { isCartOpen } = useContext(CartContext);

    const handleToggle = () => {
        console.log('hit')
    }

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <h1 className='logo' >SUBURBAN OUTFITTERS</h1>
                </Link>
                <div className='options'>
                    <Link className='option' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span onClick={signOutUser} className='option' >SIGN OUT</span>
                        ) : (
                            <Link className='option' to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
};


export default Navigation;
