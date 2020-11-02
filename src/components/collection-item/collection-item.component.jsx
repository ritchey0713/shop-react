import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import { StyledPrice, StyledCollectionItem, StyledFooter, StyledImage, StyledName, AddButton } from "./collection-item.styles"

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <StyledCollectionItem>
      <StyledImage imageUrl={imageUrl}/>
      <StyledFooter>
        <StyledName>{name}</StyledName>

        <StyledPrice>{price}</StyledPrice>
      </StyledFooter>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </StyledCollectionItem>
  );
};

export default connect(null, { addItem })(CollectionItem);
