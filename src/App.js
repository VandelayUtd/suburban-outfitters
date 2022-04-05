import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Navigation from './pages/navigation/navigation';
import Authentication from './pages/authentication/authentication';
import CheckoutPage from './pages/checkout/checkout';
import { auth } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = () => {
return (
    <div>
      <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<HomePage />}/>
        <Route path='/shop' element={<ShopPage />} />
        <Route path ='/checkout' element={<CheckoutPage />}/>
        <Route path='/auth' element={<Authentication />} />
      </Route>
      </Routes>
    </div>  
)}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
