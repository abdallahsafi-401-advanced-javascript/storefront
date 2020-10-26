let initalState = {
  cart: [],
};

export default (state = initalState, action) => {
  let { type, payload } = action;
  let cart = state.cart;
  switch (type) {
    case "ADD_PRODUCT":
      if (cart.indexOf(payload) <= -1) {
        cart = [...cart, payload];
      }
      return { cart };

    case "DELETE_PRODUCT":
      cart.splice(cart.indexOf(payload), 1);
      cart = [...cart];
      return { cart };

    default:
      return state;
  }
};

// actions
export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: "DELETE_PRODUCT",
    payload: product,
  };
};
