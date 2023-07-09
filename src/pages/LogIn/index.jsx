import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserID,
  setUserPassword,
  setUserEmail,
  setLogInError,
  login,
} from "../../actions/actions";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const userID = useSelector((state) => state.userID);
  const userPassword = useSelector((state) => state.userPassword);
  const userEmail = useSelector((state) => state.userEmail);
  const logInError = useSelector((state) => state.logInError);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
      if (storedIsLoggedIn === "true") {
        dispatch(login()); // Dispatch login action to update state
      } else {
        navigate("/login");
      }
    };

    if (!isLoggedIn) {
      checkLoginStatus();
    }
  }, [isLoggedIn, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userID,
      userPassword,
      userEmail,
    };

    axios
      .post(
        "https://f6227c41-ad14-49d4-8e8d-6179ca749e9a.mock.pstmn.io/login",
        userData
      )
      .then((response) => {
        console.log("로그인 성공", response.data);
        dispatch(login()); // Dispatch login action to update state
        localStorage.setItem("isLoggedIn", "true"); // Store login status in local storage
        // Reset the form fields
        dispatch(setUserID(""));
        dispatch(setUserPassword(""));
        dispatch(setUserEmail(""));
      })
      .catch((error) => {
        dispatch(setLogInError(true));
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-4xl my-10">로그인</h1>
      <form onSubmit={handleSubmit} className="mx-auto w-64">
        <div className="mb-4">
          <label htmlFor="userID" className="block font-bold mb-1">
            아이디
          </label>
          <input
            type="text"
            id="userID"
            value={userID}
            onChange={(e) => dispatch(setUserID(e.target.value))}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userPassword" className="block font-bold mb-1">
            비밀번호
          </label>
          <input
            type="password"
            id="userPassword"
            value={userPassword}
            onChange={(e) => dispatch(setUserPassword(e.target.value))}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userEmail" className="block font-bold mb-1">
            이메일
          </label>
          <input
            type="email"
            id="userEmail"
            value={userEmail}
            onChange={(e) => dispatch(setUserEmail(e.target.value))}
            className="w-full px-3 py-2 border rounded"
            required
          />
          {logInError && (
            <div className="text-red-600 font-bold mt-2">
              아이디,이메일 또는 비밀번호가 틀렸습니다.
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          로그인
        </button>
      </form>
      <p className="text-center text-gray-600 mt-2">
        아직 회원이 아니신가요?{" "}
        <Link to="/signup" className="text-blue-600 font-bold">
          회원가입 하러가기
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
