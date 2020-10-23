import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartitems } from "../../redux/cart/cart.selectors.js";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

const mapStateToProps = (state) => ({
  cartItems: selectCartitems(state),
});

export default connect(mapStateToProps)(Cart);
