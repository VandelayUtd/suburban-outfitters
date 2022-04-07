import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { UserContext } from '../../contexts/user.context'
import { auth, signOutUser } from '../../firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors';


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
                <Link className='option' to='/shop'>
                    CONTACT
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
        </div>
            <Outlet />
        </>
    );
};

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
})

export default connect(mapStateToProps)(Navigation);
