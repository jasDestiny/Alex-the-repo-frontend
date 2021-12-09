import React from 'react'
import "./sign-in-sign-up-page.styles.scss"

import StudentAdd from '../../components/student-add/sign-up.component'
import SignIn from '../../components/faculty-add/sign-in.component'

function AddProject({handleSignIn}) {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn handleSignIn = {handleSignIn}/>
            <StudentAdd handleSignIn = {handleSignIn}/>
        </div>
    )
}

export default AddProject
