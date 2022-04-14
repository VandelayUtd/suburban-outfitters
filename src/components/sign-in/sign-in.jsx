import { useState } from 'react';

import FormInput from '../form-input/form-input';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button';

import {
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../firebase/firebase.utils';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';


const defaultFormFields = {
    displayName: '',
    email: '', 
    password: '', 
    confirmPassword: '',
}

const SignIn = () =>  {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormFields({ ...formFields, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formFields;
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(user)

            resetFormFields();
        } catch(error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password or email');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break
                default:
                    console.log(error)
            }
            console.log(error.message)
        }
    }


    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span className='title'>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    onChange={handleChange} 
                    name='email'
                    type='text'
                    label='Email'
                    value={email}
                    required
                />
                <FormInput
                    onChange={handleChange} 
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    required
                />
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>Sign In with Google</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignIn;
