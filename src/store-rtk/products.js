import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const products = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetails: {},
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProductDetails(state, action) {
      state.productDetails = action.payload;
    },
  },
});

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

export const { setProducts, setProductDetails } = products.actions;

export default products.reducer;
