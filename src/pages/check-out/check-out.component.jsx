import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component.jsx";
import {
  selectCartitems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors.js";
import { StyledCheckout, StyledHeader, StyledHeaderBlock, StyledTestWarning, StyledTotal } from "./check-out.styles.jsx";
import "./check-out.styles.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <StyledCheckout>
    <StyledHeader>
      <StyledHeaderBlock>
        <span>Product</span>
      </StyledHeaderBlock>
      <StyledHeaderBlock>
        <span className="">Description</span>
      </StyledHeaderBlock>
      <StyledHeaderBlock>
        <span className="">Quantity</span>
      </StyledHeaderBlock>
      <StyledHeaderBlock>
        <span className="">Price</span>
      </StyledHeaderBlock>
      <StyledHeaderBlock>
        <span className="">REMOVE</span>
      </StyledHeaderBlock>
    </StyledHeader>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <StyledTotal>
      <span>TOTAL: ${cartTotal}</span>
    </StyledTotal>
    <StyledTestWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - exp: 01/21 - cvv: 123
    </StyledTestWarning>
    <StripeCheckoutButton price={cartTotal} />
  </StyledCheckout>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartitems,
  cartTotal: selectCartTotal,
});
export default connect(mapStateToProps, {})(CheckoutPage);