import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { clearItem } from "../../redux/cart/cart.actions.js";

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10007;
      </div>
    </div>
  );
};

export default connect(null, { clearItem })(CheckoutItem);
