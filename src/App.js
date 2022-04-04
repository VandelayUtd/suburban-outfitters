import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Navigation from './pages/navigation/navigation';
import SignInUp from './pages/sign-in-up/sign-in-up';
import CheckoutPage from './pages/checkout/checkout';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<HomePage />}/>
          <Route path='/shop' element={<ShopPage />} />
          <Route path ='/checkout' element={<CheckoutPage />}/>
          <Route  
            path='/signin' 
            render={()=> 
              this.props.currentUser ? (
                <Navigate to='/'/>
                ) : (
                <SignInUp/>)
                }/>
        </Route>
        </Routes>
      </div>  
  )}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
