import React, { Component } from 'react';

import './sign-in.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils';

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

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("so far so good")
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
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle}>
            Sign In with Google
            </CustomButton>
        </form>
    </div>)
  }
}
