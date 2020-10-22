export const addItemToCart = (cartItems, cartitemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartitemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartitemToAdd
        ? { ...cartItem, quantity: (cartItem.quantity += 1) }
        : { ...cartItem }
    );
  }
  //only hits this if the no match is found for item being added
  return [...cartItems, { ...cartitemToAdd, quantity: 1 }];
};
