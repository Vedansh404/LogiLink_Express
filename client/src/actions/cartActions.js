export const addToCart = (item, quantity, weight) => (dispatch, getState) => {
  var cartItem = {
    name: item.name,
    _id: item._id,
    quantity: quantity,
    weight: weight,
    prices: item.rate,
    price: quantity * weight * (item.rate / 1000),
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: item });
  const cartItem = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItem));
};
