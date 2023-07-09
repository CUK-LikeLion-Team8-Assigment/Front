export const setUserID = (userID) => ({
  type: "SET_USER_ID",
  payload: userID,
});

export const setUserPassword = (userPassword) => ({
  type: "SET_USER_PASSWORD",
  payload: userPassword,
});

export const setUserEmail = (userEmail) => ({
  type: "SET_USER_EMAIL",
  payload: userEmail,
});

export const setLogInError = (logInError) => ({
  type: "SET_LOGIN_ERROR",
  payload: logInError,
});

export const resetLoginForm = () => ({
  type: "RESET_LOGIN_FORM",
});

export const login = (userData) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userData,
  };
};
