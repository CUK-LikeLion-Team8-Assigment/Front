import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const LogIn = () => {
  const [userID, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [logInError, setLogInError] = useState(false);
  const [, setCookie] = useCookies();
  const navigate = useNavigate();

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
        setCookie("isLoggedIn", true, { path: "/" });
        // Reset the form fields
        setUserID("");
        setUserPassword("");
        setUserEmail("");
        navigate("/");
      })
      .catch((error) => {
        setLogInError(error.response?.status === 401);
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
            onChange={(e) => setUserID(e.target.value)}
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
            onChange={(e) => setUserPassword(e.target.value)}
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
            onChange={(e) => setUserEmail(e.target.value)}
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
