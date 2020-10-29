import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component.jsx";
import {
  selectCartitems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors.js";
import "./check-out.styles.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span className="">Description</span>
      </div>
      <div className="header-block">
        <span className="">Quantity</span>
      </div>
      <div className="header-block">
        <span className="">Price</span>
      </div>
      <div className="header-block">
        <span className="">REMOVE</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <div className="total">
      <span>TOTAL: ${cartTotal}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - exp: 01/21 - cvv: 123
    </div>
    <StripeCheckoutButton price={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartitems,
  cartTotal: selectCartTotal,
});
export default connect(mapStateToProps, {})(CheckoutPage);
