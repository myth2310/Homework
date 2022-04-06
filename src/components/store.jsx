import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./account-slice";

export default configureStore({
  reducer: {
   search: SearchReducer
  }
});