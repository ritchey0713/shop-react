import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import './App.css';
import HomePage from './containers/homepage/homepage.component';
import ShopPage from "./containers/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from './containers/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from "./firebase/firebase.utils"

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null

  componentDidMount(){
    // auth comes from firebase 
    // user in callback is user state
    // auth is a subscription 
    // set to unsubscribeFromAuth to call it as a function to close
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount(){
   // only triggered to stop listening when leaving application.
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      <div>
        <Header currentUser={ this.state.currentUser }/>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/shop" component={ ShopPage } />
          <Route exact path="/signin" component={ SignInAndSignUpPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
