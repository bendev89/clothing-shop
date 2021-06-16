import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import './signin.styles.scss'



class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email : "",
             password : ""
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ 
            email : "",
            password : ""
        })
    };
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name] : value})
    };
    
    render() {
        return (
            <div className="sign-in">
                <h2>J'aidéja un compte</h2>
                <span>Se connecter avec les identifiants</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Mot de passe'
                        required
                    />
                    <div className="buttons">
                    <CustomButton type="submit"> CONNEXION</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Connexion avec Google</CustomButton>
                    </div>
                    

                </form>
            </div>
        )
    }
}

export default SignIn;
