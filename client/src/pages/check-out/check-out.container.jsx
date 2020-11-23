// import { connect } from "react-redux";
// import { compose } from "redux";
// import { createStructuredSelector } from "reselect";
// import {
//   selectCartitems,
//   selectCartTotal,
// } from "../../redux/cart/cart.selectors.js";
// import checkOutComponent from "./check-out.component.jsx";

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartitems,
//   cartTotal: selectCartTotal,
// });

// const CheckOutContainer = compose(connect(mapStateToProps))(checkOutComponent);

// export default CheckOutContainer;

import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CheckoutPage from "./check-out.component.jsx";

const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

const CheckOutContainer = () => (
  <Query query={GET_CART_ITEMS_AND_TOTAL}>
    {({ data }) => {
      console.log(data);
      return (
        <CheckoutPage cartItems={data.cartItems} cartTotal={data.cartTotal} />
      );
    }}
  </Query>
);

export default CheckOutContainer;
