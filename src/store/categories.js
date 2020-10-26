let initalState = {
  categories: [
    { name: "food", displayName: "food", description: "description" },
    { name: "elctronics", displayName: "elctronics", description: "description" },
    { name: "fasion", displayName: "fasion", description: "description" },
  ],
  active: "food",
};

export default (state = initalState, action) => {
  let { type, payload } = action;
  let active = state.active;
  let categories = state.categories;
  switch (type) {
    case "UPDATE_ACTIVE":
      active = payload;
      return { active, categories };
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
