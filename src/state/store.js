import { configureStore } from "@reduxjs/toolkit";
import { loadProducts, reducer } from "./reducers/reducer";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import axios from "axios";

const fetchProducts = () => {
  return function (dispatch) {
    axios
      .get("http://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data;
        dispatch(loadProducts(products));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const store = configureStore(reducer(), applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchProducts);

export default store;
