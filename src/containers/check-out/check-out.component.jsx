import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
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
    {cartItems.map((item) => item.name)}
    <div className="total">
      <span>TOTAL: ${cartTotal}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartitems,
  cartTotal: selectCartTotal,
});
export default connect(mapStateToProps, {})(CheckoutPage);
