import React from 'react';
import { Switch, Route } from "react-router-dom"

import './App.css';
import HomePage from './containers/homepage/homepage.component';
import ShopPage from "./containers/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from './containers/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/shop" component={ ShopPage } />
        <Route exact path="/signin" component={ SignInAndSignUpPage } />
      </Switch>
    </div>
  );
}

export default App;
