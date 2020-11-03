import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../../containers/collection/collection.component";
import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase.utils";
import { startUpdateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

// pass collectionsoverview to with spinner to be the component rendered if loading is false
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapShop = null;

  componentDidMount() {
    const { startUpdateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapShop = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
        startUpdateCollections(collectionsMap);
        this.setState({
          loading: false,
        });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={loading}
              path={props.match.path}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, { startUpdateCollections })(ShopPage);
