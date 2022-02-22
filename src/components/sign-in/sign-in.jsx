import React, { Component } from 'react';

import './sign-in.styles.scss'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password:''})
        } catch(error) {
            console.log(error)
        }
    }

    render() {
    return (
    <div className='sign-in'>
        <h2>i already have an account</h2>
        <span>sign in with email</span>

        <form className='sign-in-form' onSubmit={this.handleSubmit}>
            <FormInput 
            name='email' 
            type='email' 
            label='email'
            value={this.state.email} 
            handleChange={this.handleChange} 
            required 
            />
            <FormInput 
            name='password' 
            type='password' 
            label='password'
            value={this.state.password} 
            handleChange={this.handleChange} 
            required 
            />
            <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
            </CustomButton>
            </div>
        </form>
    </div>)
  }
}
