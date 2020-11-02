import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { StyledCollectionWrapper, StyledPreview, StyledTitle } from "./collection-preview.styles"

const CollectionPreview = ({ title, items }) => (
  <StyledCollectionWrapper>
    <StyledTitle>{title.toUpperCase()}</StyledTitle>
    <StyledPreview>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </StyledPreview>
  </StyledCollectionWrapper>
);

export default CollectionPreview;
