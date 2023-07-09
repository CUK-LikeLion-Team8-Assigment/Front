import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginReducer from "../reducers/reducers";
import { login } from "../actions/actions";

const middleware = [thunk];

const initialIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";

const store = configureStore({
  reducer: loginReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: {
    login: {
      isLoggedIn: initialIsLoggedIn,
    },
  },
});

if (initialIsLoggedIn) {
  store.dispatch(login());
}

export default store;
