import { configureStore, combineReducers } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layoutSlice";
import { Provider } from "react-redux";

const reducer = combineReducers({
  layout: layoutSlice,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
