import React from 'react'
import "./sign-in-sign-up-page.styles.scss"

import SignUp from '../../components/sign-up/sign-up.component'
import SignIn from '../../components/sign-in/sign-in.component'

function SignInAndSignUp({handleSignIn}) {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn handleSignIn = {handleSignIn}/>
            <SignUp handleSignIn = {handleSignIn}/>
        </div>
    )
}

export default SignInAndSignUp
