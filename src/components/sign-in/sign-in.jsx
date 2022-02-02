import React, { Component } from 'react';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({email: e.target.value})
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
            <input name='email' value={this.state.email} onChange={this.handleChange} />
        </form>
    </div>)
  }
}
