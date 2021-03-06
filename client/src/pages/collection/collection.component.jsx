import React from "react";
import { default as CollectionItem } from "../../components/collection-item/collection-item.container";
import "./collection.styles.scss";
import {
  StyledCollection,
  StyledItems,
  StyledTitle,
} from "./collection.styles";

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

export default CollectionPage;
