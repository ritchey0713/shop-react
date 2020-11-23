import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import Spinner from "../../components/spinner/spinner.component";
//import { default as CollectionsOverview } from "../../components/collections-overview/collections-overview.graphql-container";
// import CollectionPageContainer from "../collection/collection.container-graphql";

const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container-graphql")
);
const CollectionsOverview = lazy(() =>
  import(
    "../../components/collections-overview/collections-overview.graphql-container"
  )
);

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
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default connect(null, { fetchCollectionsStart })(ShopPage);
