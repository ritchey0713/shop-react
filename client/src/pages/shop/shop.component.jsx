import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { default as CollectionsOverview } from "../../components/collections-overview/collections-overview.graphql-container";
import CollectionPageContainer from "../collection/collection.container-graphql";

const ShopPage = ({ match, fetchCollectionsStart }) => {
  //pre hooks
  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;
  //   fetchCollectionsStart();
  // }
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default connect(null, { fetchCollectionsStart })(ShopPage);
