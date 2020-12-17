import React from "react";
import { StyledImg, StyledDetails, StyledItem } from "./cart-item.styles";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <StyledItem>
    <StyledImg src={imageUrl} alt="item" />
    <StyledDetails>
      <span>{name}</span>
      <span>
        {quantity} X ${price}
      </span>
    </StyledDetails>
  </StyledItem>
);

export default React.memo(CartItem);
