const initialState = {
  userID: "",
  userPassword: "",
  userEmail: "",
  logInError: false,
  isLoggedIn: false, // Add the isLoggedIn state
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      return { ...state, userID: action.payload };
    case "SET_USER_PASSWORD":
      return { ...state, userPassword: action.payload };
    case "SET_USER_EMAIL":
      return { ...state, userEmail: action.payload };
    case "SET_LOGIN_ERROR":
      return { ...state, logInError: action.payload };
    case "RESET_LOGIN_FORM":
      return initialState;
    case "LOGIN_SUCCESS":
      return { ...state, isLoggedIn: true };
    case "LOGOUT_SUCCESS":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default loginReducer;
