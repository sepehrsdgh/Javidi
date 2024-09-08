import { configureStore, combineReducers } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layoutSlice";
import { Provider } from "react-redux";
import inputSlice from "./slices/inputSlice";

const reducer = combineReducers({
  layout: layoutSlice,
  inptu: inputSlice,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
