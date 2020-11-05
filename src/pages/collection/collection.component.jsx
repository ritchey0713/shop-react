import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";
import { StyledCollection, StyledItems, StyledTitle } from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <StyledCollection>
      <StyledTitle>{title}</StyledTitle>
      <StyledItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </StyledItems>
    </StyledCollection>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);