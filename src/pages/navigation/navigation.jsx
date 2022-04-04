import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors';


import './navigation.styles.scss';

const Navigation = ({ currentUser, hidden }) => (
    <>
    <div className='navigation'>
        <Link className='logo-container' to='/'>
            <h1 className='logo' >SUBURBAN OUTFITTERS</h1>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={()=> auth.signOut()}>
                    SIGN OUT
                </div>
                ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                )
            }
            <CartIcon />
        </div>
        {hidden ?  null : <CartDropdown/> }
    </div>
        <Outlet />
    </>
);

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
})

export default connect(mapStateToProps)(Navigation);
