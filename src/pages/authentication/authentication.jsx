import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './authentication.scss'

const Authentication = () => (
    <div className='authentication'>
        <SignIn />
        {/* <SignUp /> */}
    </div>
)

export default Authentication
