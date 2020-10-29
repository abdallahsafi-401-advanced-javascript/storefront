import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const categories = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    active: "Electronics",
  },
  reducers: {
    updateActive(state, action) {
      state.active =  action.payload;
    },
    setCategories(state, action) {
      console.log('action =====>', action);
        state.categories = action.payload ;
    },
  },
});

export const loadCategories = () => async (dispatch, getState) => {
    axios
      .get("https://as-app-server.herokuapp.com/api/v1/categories")
      .then((res) => {
        // handle success
        console.log(res);
          dispatch(setCategories(res.data.results));
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  

export const { updateActive, setCategories } = categories.actions;

export default categories.reducer;
