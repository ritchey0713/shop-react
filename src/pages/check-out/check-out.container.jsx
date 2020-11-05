import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartitems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors.js";
import checkOutComponent from "./check-out.component.jsx";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartitems,
  cartTotal: selectCartTotal,
});

const CheckOutContainer = compose(connect(mapStateToProps))(checkOutComponent);

export default CheckOutContainer;
