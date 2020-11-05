import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/check-out/check-out.component";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import CheckOutContainer from "./pages/check-out/check-out.container";
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collections } = this.props;

    // auth comes from firebase
    // user in callback is user state
    // auth is a subscription
    // set to unsubscribeFromAuth to call it as a function to close
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user })
      // createUserProfileDocument(userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //get a snapshop using .onSnapShot
        userRef.onSnapshot((snapShot) => {
          // .data() gives us json of everything BUT the obj id
          // console.log(snapShot.data())
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        //if we have no userAuth reset currentuser to null,
        // this is also triggered by the auth.signOut() in the header

        // setCurrentUser(null);
        setCurrentUser(userAuth);
      }
    });
    //use this to update the shop collections (add new items to the shop)
    // addCollectionAndDocuments(
    //   "collections",
    //   collections.map(({ title, items }) => ({ title, items }))
    // );
  }

  componentWillUnmount() {
    // only triggered to stop listening when leaving application.
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutContainer} />

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
