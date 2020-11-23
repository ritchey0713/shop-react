import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
// import {
//   clearItem,
//   addItem,
//   removeItem,
// } from "../../redux/cart/cart.actions.js";
import {
  StyledArrow,
  StyledButton,
  StyledImg,
  StyledImgWrapper,
  StyledItemDiv,
  StyledQuantitySpan,
  StyledSpan,
  StyledValue,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <StyledItemDiv>
      <StyledImgWrapper>
        <StyledImg src={imageUrl} alt="item" />
      </StyledImgWrapper>
      <StyledSpan>{name}</StyledSpan>
      <StyledQuantitySpan>
        <StyledArrow onClick={() => removeItem(cartItem)}>&#10094;</StyledArrow>
        <StyledValue>{quantity}</StyledValue>
        <StyledArrow onClick={() => addItem(cartItem)}>&#10095;</StyledArrow>
      </StyledQuantitySpan>
      <StyledSpan> {price}</StyledSpan>
      <StyledButton onClick={() => clearItem(cartItem)}>&#10007;</StyledButton>
    </StyledItemDiv>
  );
};

export default CheckoutItem;
