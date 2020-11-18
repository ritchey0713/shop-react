import React from "react";
// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";

import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

import {
  StyledCartDropDown,
  StyledCartItems,
  StyledMessage,
} from "./cart-dropdown.styles";
import { Redirect } from "react-router-dom";

// const Cart = ({ cartItems, history, toggleCartHidden }) => (
//   <StyledCartDropDown>
//     <StyledCartItems>
//       {cartItems.length ? (
//         cartItems.map((item) => <CartItem key={item.id} item={item} />)
//       ) : (
//         <StyledMessage>The cart is empty</StyledMessage>
//       )}
//     </StyledCartItems>
//     <CustomButton
//       onClick={() => {
//         toggleCartHidden();
//         history.push("/checkout");
//       }}
//     >
//       CHECKOUT
//     </CustomButton>
//   </StyledCartDropDown>
// );

// // const mapStateToProps = ({ cart: { cartItems } }) => ({
// //   cartItems,
// // });

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartitems,
// });

// //withRouter can take a comp as an arg, including connected comps
// export default withRouter(connect(mapStateToProps, { toggleCartHidden })(Cart));

const Cart = ({ cartItems, toggleCartHidden }) => {
  let history = useHistory();
  return (
    <StyledCartDropDown>
      <StyledCartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <StyledMessage>The cart is empty</StyledMessage>
        )}
      </StyledCartItems>
      <CustomButton
        onClick={() => {
          toggleCartHidden();
          history.push("/checkout");
          //<Redirect to="/" />;
        }}
      >
        CHECKOUT
      </CustomButton>
    </StyledCartDropDown>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

//withRouter can take a comp as an arg, including connected comps
export default Cart;
