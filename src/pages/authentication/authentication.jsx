import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import { AuthenticationContainer } from './authentication.styles'

const Authentication = () => (
    <AuthenticationContainer>
        <SignIn />
        <SignUp />
    </AuthenticationContainer>
)

export default Authentication
