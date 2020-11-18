// import React, { Component } from "react";
import React, { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
//import CheckoutPage from "./pages/check-out/check-out.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import CheckOutContainer from "./pages/check-out/check-out.container";
import { checkUserSession } from "./redux/user/user.actions";
import { firestore } from "./firebase/firebase.utils";
import { getSnapshotFromUserAuth } from "./redux/user/user.sagas";
const App = ({ checkUserSession, currentUser }) => {
  // pass [checkUserSession as it is passed in from mapDIspatch, so it wont allow it to fire several times]
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  // pre hooks
  // unsubscribeFromAuth = null;
  // componentDidMount() {
  //   const { setCurrentUser, collections, checkUserSession } = this.props;
  //   checkUserSession();

  //   // auth comes from firebase
  //   // user in callback is user state
  //   // auth is a subscription
  //   // set to unsubscribeFromAuth to call it as a function to close
  //   // USING SUBCRIBING TO GET CURRENT USER (PRE SAGA)
  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   //   // this.setState({ currentUser: user })
  //   //   // createUserProfileDocument(userAuth)
  //   //   if (userAuth) {
  //   //     const userRef = await createUserProfileDocument(userAuth);
  //   //     //get a snapshop using .onSnapShot
  //   //     userRef.onSnapshot((snapShot) => {
  //   //       // .data() gives us json of everything BUT the obj id
  //   //       // console.log(snapShot.data())
  //   //       setCurrentUser({
  //   //         id: snapShot.id,
  //   //         ...snapShot.data(),
  //   //       });
  //   //     });
  //   //   } else {
  //   //     //if we have no userAuth reset currentuser to null,
  //   //     // this is also triggered by the auth.signOut() in the header

  //   //     // setCurrentUser(null);
  //   //     setCurrentUser(userAuth);
  //   //   }
  //   // });
  //   //use this to update the shop collections (add new items to the shop)
  //   // addCollectionAndDocuments(
  //   //   "collections",
  //   //   collections.map(({ title, items }) => ({ title, items }))
  //   // );
  // }

  // componentWillUnmount() {
  //   // only triggered to stop listening when leaving application.
  //   this.unsubscribeFromAuth();
  // }

  const history = useHistory();
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
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectCollectionsForPreview,
});

// pre saga get current user
// export default connect(mapStateToProps, { setCurrentUser })(App);
export default connect(mapStateToProps, { checkUserSession })(App);
