import React from 'react'
import SignUp from '../../components/sign-up/signup'
import SignIn from '../../components/signin/signin'
import './auth.styles.scss'


const AuthPage = () => {
    return (
        <div className="sign-in-and-sign-up">
           <SignIn />
           <SignUp />
        
        </div>
    )
}

export default AuthPage
