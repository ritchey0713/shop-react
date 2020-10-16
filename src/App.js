import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import './App.css';
import HomePage from './containers/homepage/homepage.component';
import ShopPage from "./containers/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from './containers/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user })
      // createUserProfileDocument(userAuth)
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        //get a snapshop using .onSnapShot
        userRef.onSnapshot(snapShot => {
          // .data() gives us json of everything BUT the obj id
          // console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })

          console.log(this.state)
        })
      } else {
        //if we have no userAuth reset currentuser to null, 
        // this is also triggered by the auth.signOut() in the header
        this.setState({
          currentUser: null
        })

      }
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
