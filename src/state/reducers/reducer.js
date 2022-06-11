export const LOAD_PRODUCTS = "LOAD_PRODUCTS";

const initialState = {
  products: [],
};

export const loadProducts = (products) => {
  return {
    type: LOAD_PRODUCTS,
    payload: products,
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        products: action.payload,
      };

    default:
      break;
  }
};
