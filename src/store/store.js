import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginReducer from "../reducers/reducers";
import { login } from "../actions/actions"; // Import the login action from actions.js

const middleware = [thunk];

const store = configureStore({
  reducer: loginReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// Initialize the isLoggedIn state from local storage
const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn === "true") {
  store.dispatch(login()); // Dispatch the login action to update the state
}

export default store;
