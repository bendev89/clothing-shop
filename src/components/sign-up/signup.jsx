import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import './sign-up.styles.scss'



class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            displayName :"",
             email : "",
             password : "",
             confirmPassword: ""
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword}= this.state;
        if(password !== confirmPassword){
            alert('Les mots de passe ne sont pas identiques');

            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});
            this.setState ({
                displayName :"",
                 email : "",
                 password : "",
                 confirmPassword: ""
            })
            
        } catch (error) {
        
        }

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
     const {displayName, email, password, confirmPassword}= this.state;
        return (
            <div className="sign-up">
                <h2>Je n'ai pas encore de compte</h2>
                <span>Créer votre compte</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        handleChange={this.handleChange}
                        value={displayName}
                        label='Nom'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Mot de passe'
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirmation du mot de passe'
                        required
                    />
                    <div className="buttons">
                    <CustomButton type="submit"> INSCRIPTION</CustomButton>
                    {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Connexion avec Google</CustomButton> */}
                    </div>
                    

                </form>
            </div>
        )
    }
}

export default SignUp;
