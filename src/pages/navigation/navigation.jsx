import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../firebase/firebase.utils';

import ShoppingIcon from '../../components/cart-icon/cart-icon'

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);



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
                    <ShoppingIcon />
                </div>
            </div>
            <Outlet />
        </>
    );
};


export default Navigation;
