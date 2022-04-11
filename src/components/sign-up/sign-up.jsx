import { useState, useContext } from 'react'
import FormInput from '../form-input/form-input'
import Button from '../button/button'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'



import { UserContext } from '../../contexts/user.context'

const defaultFormFields = {
    displayName: '',
    email: '', 
    password: '', 
    confirmPassword: '',
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext)

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
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            setCurrentUser(user);

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
            <h2>I don't have an account</h2>
            <span className='title'>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name' 
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName} 
                />
                <FormInput
                    label='Email' 
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email} 
                />
                <FormInput
                    label='Password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password} 
                />
                <FormInput
                    label='Confirm Password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword}    
                />
                <Button type='submit'>submit</Button>
            </form>
        </div>
    )
};

export default SignUp;