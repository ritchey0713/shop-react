import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { selectCartitems } from "../../redux/cart/cart.selectors.js";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { createStructuredSelector } from "reselect";

const Cart = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">The cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push("/checkout")}>
      CHECKOUT
    </CustomButton>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartitems,
});

//withRouter can take a comp as an arg, including connected comps
export default withRouter(connect(mapStateToProps)(Cart));
