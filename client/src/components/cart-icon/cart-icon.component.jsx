import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";
import { createStructuredSelector } from "reselect";
import {
  StyledCartIcon,
  StyledItemCount,
  StyledIconSvg,
} from "./cart-icon.styles";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <StyledCartIcon onClick={() => toggleCartHidden()}>
    <StyledIconSvg>
      <ShoppingIcon />
    </StyledIconSvg>
    <StyledItemCount className="item-count">{itemCount}</StyledItemCount>
  </StyledCartIcon>
);

const mapStateToProps = createStructuredSelector({
  // have to pass the state in to our selectors for them to have access
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
