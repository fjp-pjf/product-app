import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./reducers/reducer";

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
