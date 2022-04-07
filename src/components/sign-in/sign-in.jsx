import { useState } from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../firebase/firebase.utils';


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
        <div className='sign-in-container'>
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
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' buttonType='google' onClick={logGoogleUser}>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
