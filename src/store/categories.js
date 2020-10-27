import axios from "axios";

let initalState = {
  categories: [],
  active: "Electronics",
};

export default (state = initalState, action) => {
  let { type, payload } = action;
  let active = state.active;
  let categories = state.categories;
  switch (type) {
    case "UPDATE_ACTIVE":
      active = payload;
      return { active, categories };
    case "SET_CATEGORIES":
      return { ...state, categories: payload };
    default:
      return state;
  }
};

// actions
export const changeActive = (name) => {
  return {
    type: "UPDATE_ACTIVE",
    payload: name,
  };
};

export const setCategories = (categories) => {
  return {
    type: "SET_CATEGORIES",
    payload: categories,
  };
};

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
