import products from "../components/storefront/products";

let initalState = {
  //category association, name, description, price, inventory count
  products: [
    {
      category: "food",
      name: "food1",
      description: "",
      price: 0,
      inventoryCount: 0,
    },
    {
      category: "food",
      name: "food2",
      description: "",
      price: 0,
      inventoryCount: 0,
    },
    {
      category: "food",
      name: "food3",
      description: "",
      price: 0,
      inventoryCount: 0,
    },
    {
      category: "elctronics",
      name: "elctronics1",
      description: "",
      price: 0,
      inventoryCount: 0,
    },
    {
      category: "elctronics",
      name: "elctronics2",
      description: "",
      price: 0,
      inventoryCount: 0,
    },
    {
      category: "elctronics",
      name: "elctronics3",
      description: "",
      price: 0,
      inventoryCount: 0,
    },
    {
      category: "fasion",
      name: "fasion1",
      description: "",
      price: 0,
      inventoryCount: 0,
    },
    {
      category: "fasion",
      name: "fasion2",
      description: "",
      price: 0,
      inventoryCount: 0,
    },
    {
      category: "fasion",
      name: "fasion3",
      description: "",
      price: 0,
      inventoryCount: 0,
    },
  ],
};

export default (state = initalState, action) => {
  let { type, payload } = action;
  let products = state.products;
  switch (type) {
    case "UPDATE_ACTIVEs":
      let productsL = products.map((e) => {
         if(e.category === payload) return e;
      });
      return { productsL };
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
