import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../firebase/firebase.utils'

import './header.styles.scss'
const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>

            </Link>
            <div className="options">
                <Link className="option" to="/shop">Boutique</Link>
            
                <Link className="option" to="/contact">Contact</Link>
                { currentUser ? 
                <div className="option" onClick={()=> auth.signOut()}>Déconnexion</div> :
                <Link className="option" to="/signin">Connexion</Link>
                }
                
            </div>
        </div>
    )
}

export default Header
