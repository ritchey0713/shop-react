export const addItemToCart = (cartItems, cartitemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartitemToAdd.id
  );
  console.log(cartItems);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartitemToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity += 1) }
        : { ...cartItem }
    );
  }
  //only hits this if the no match is found for item being added
  return [...cartItems, { ...cartitemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const getCartItemCount = (cartItems) =>
  cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.quantity,
    0
  );

export const getCartTotal = (cartItems) =>
  cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.quantity * cartItem.price,
    0
  );

export const clearItemFromCart = (cartItems, item) =>
  cartItems.filter((cartItem) => cartItem.id !== item.id);
