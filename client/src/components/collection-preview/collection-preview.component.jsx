import React from "react";
import "./collection-preview.styles.scss";
import { default as CollectionItem } from "../collection-item/collection-item.container";
import {
  StyledCollectionWrapper,
  StyledPreview,
  StyledTitle,
} from "./collection-preview.styles";
import { useLocation } from "react-router-dom";

const CollectionPreview = ({ title, items, ...otherProps }) => {
  const location = useLocation();
  return (
    <StyledCollectionWrapper>
      <StyledTitle to={`${location.pathname}/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </StyledTitle>
      <StyledPreview>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </StyledPreview>
    </StyledCollectionWrapper>
  );
};

export default CollectionPreview;

// to={`${otherProps.path}/${otherProps.routeName}`
