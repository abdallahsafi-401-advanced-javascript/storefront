import axios from "axios";

let initalState = {
  //category association, name, description, price, inventory count
  products: [],
  productDetails: {},
};

export default (state = initalState, action) => {
  let { type, payload } = action;
  let products = state.products;
  switch (type) {
    case "UPDATE_ACTIVEs":
      let productsL = products.map((e) => {
        if (e.category === payload) return e;
      });
      return { productsL };
    case "SET_PRODUCTS":
      return { ...state, products: payload };

    case "SET_PRODUCTS_DETAILS":
      return { ...state, productDetails: payload };
    default:
      return state;
  }
};

// actions
export const categoryChanged = (name) => {
  return {
    type: "GET_PRODUCTS",
    payload: name,
  };
};

export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const setProductDetails = (product) => {
  return {
    type: "SET_PRODUCTS_DETAILS",
    payload: product,
  };
};

// Load all products
export const loadProducts = () => async (dispatch, getState) => {
  axios
    .get("https://as-app-server.herokuapp.com/api/v1/products")
    .then((res) => {
      // handle success
      console.log(res);
      dispatch(setProducts(res.data.results));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

// update stock when Items put in cart
export const updateStock = (product, operation) => async (
  dispatch,
  getState
) => {
  const products = getState().products;
  let theProduct = products.products.find((e) => {
    return e._id === product._id;
  });

  axios({
    method: "put",
    url: `https://as-app-server.herokuapp.com/api/v1/products/${theProduct._id}`,
    data: {
      inStock:
        theProduct.inStock > 0 && operation === 0
          ? theProduct.inStock - 1
          : theProduct.inStock + 1,
    },
  }).then(function (response) {
    console.log(response);
    dispatch(loadProducts());
  });
};

// Load one product by Id
export const getProduct = (id) => async (dispatch, getState) => {
  axios({
    method: "get",
    url: `https://as-app-server.herokuapp.com/api/v1/products/${id}`,
  }).then(function (res) {
    console.log(res);
    dispatch(setProductDetails(res.data));
  });
};
