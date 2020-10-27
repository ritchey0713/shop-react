import { createSelector } from "reselect";

//input selector (returns a slice of the state)
const selectCart = (state) => state.cart;

// takes 2 args, a collection, and a callback to return data
// callback args are from the collection( whatever pieces of state we pass to it)

export const selectCartitems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  // can use any collection, such as just the collection of cartItems since we dont need the hidden field
  [selectCartitems],
  (cartItems) =>
    cartItems.reduce(
      (accQuantity, cartItem) => accQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartitems], (cartItems) =>
  cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
