
import './sign-in.styles.scss'

import {
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
} from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

const SignIn = () =>  {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <div className='sign-in'>
          <button onClick={logGoogleUser}>google popup</button>
        </div>
    );
};

export default SignIn;
