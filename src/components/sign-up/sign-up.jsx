import { useState } from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'





const defaultFormFields = {
    displayName: '',
    email: '', 
    password: '', 
    confirmPassword: '',
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = e => {
        const { name, value } = e.target
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        const { displayName, email, password, confirmPassword } = formFields
        if(password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log(error.message)
            }
        }
        
    }

    return (
        <div className='sign-up-container'>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type='text' required onChange={handleChange} name='displayName' value={displayName} />

                <label>Email</label>
                <input type='text' required onChange={handleChange} name='email' value={email} />

                <label>Password</label>
                <input type='password' required onChange={handleChange} name='password' value={password} />

                <label>Confirm Password</label>
                <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <button type='submit'>submit</button>
            </form>
        </div>
    )
};

export default SignUp;