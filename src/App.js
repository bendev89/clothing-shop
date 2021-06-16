import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import Header from './components/header/header';
import AuthPage from './pages/auth/auth';
import HomePage from './pages/homepage'
import ShopPage from './pages/shop/shop';





class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser : null,
    }
  }
  unsuscribeFromAuth = null;

  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const useRef = await  createUserProfileDocument(userAuth);
        useRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          })
         
        });
        
      } else {
        this.setState({
          currentUser : userAuth
        })
      }
      
     
    });
  }
  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={AuthPage} />
      </Switch>
    </div>
  );
}
}

export default App;
