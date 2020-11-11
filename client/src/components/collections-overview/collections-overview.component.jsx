import React from "react";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";
import { StyledOverview } from "./collections-overview.styles";

const CollectionOverview = ({ collections, ...otherProps }) => {
  return (
    <StyledOverview>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={id}
          path={otherProps.match.path}
          {...otherCollectionProps}
        />
      ))}
    </StyledOverview>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
