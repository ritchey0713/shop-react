import React from "react";
import { default as CheckoutItem } from "../../components/checkout-item/checkout-item.container";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component.jsx";
import {
  StyledCheckout,
  StyledHeader,
  StyledHeaderBlock,
  StyledTestWarning,
  StyledTotal,
} from "./check-out.styles.jsx";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  console.log(cartItems);
  return (
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
};

export default CheckoutPage;
