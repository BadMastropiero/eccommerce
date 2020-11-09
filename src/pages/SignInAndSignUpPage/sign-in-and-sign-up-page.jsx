import React from 'react';

// components
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/signup.component';

// styles
import './sign-in-and-sign-up-page.styles.scss'

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up-page">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage