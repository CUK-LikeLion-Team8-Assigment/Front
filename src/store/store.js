import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginReducer from "../reducers/reducers";
import { login } from "../actions/actions";

const middleware = [thunk];

const store = configureStore({
  reducer: loginReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
  devTools: process.env.NODE_ENV !== "production",
});

const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn === "true") {
  store.dispatch(login());
}

export default store;
