import React, { useCallback, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangeEmail = useCallback((e) => setUserEmail(e.target.value), []);
  const onChangeNickname = useCallback((e) => setUserID(e.target.value), []);
  const onChangePassword = useCallback(
    (e) => {
      setUserPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== userPassword);
    },
    [userPassword]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(userEmail, userID, userPassword, passwordCheck);
      if (!mismatchError) {
        console.log("서버로 회원가입하기");
        setSignUpError("");
        setSignUpSuccess(false);
        axios
          .post("http://localhost:8080/join", {
            userEmail,
            userID,
            userPassword,
          })
          .then((response) => {
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error.response);
            setSignUpError(error.response);
          })
          .finally(() => {});
      }
    },
    [userEmail, userID, userPassword, passwordCheck, mismatchError]
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold my-8">Sleact</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="userEmail" className="block font-bold mb-1">
            이메일 주소
          </label>
          <input
            type="email"
            id="userEmail"
            name="email"
            value={userEmail}
            onChange={onChangeEmail}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userID" className="block font-bold mb-1">
            아이디
          </label>
          <input
            type="text"
            id="userID"
            name="userID"
            value={userID}
            onChange={onChangeNickname}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userPassword" className="block font-bold mb-1">
            비밀번호
          </label>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            value={userPassword}
            onChange={onChangePassword}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password-check" className="block font-bold mb-1">
            비밀번호 확인
          </label>
          <input
            type="password"
            id="password-check"
            name="password-check"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          {mismatchError && (
            <div className="text-red-500 font-bold">
              비밀번호가 일치하지 않습니다.
            </div>
          )}
          {!userID && (
            <div className="text-red-500 font-bold">닉네임을 입력해주세요.</div>
          )}
          {signUpError && (
            <div className="text-red-500 font-bold">{signUpError}</div>
          )}
          {signUpSuccess && (
            <div className="text-green-500 font-bold">
              회원가입되었습니다! 로그인해주세요.
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
        >
          회원가입
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        이미 회원이신가요?{" "}
        <Link to="/login" className="text-blue-600 font-bold">
          로그인 하러가기
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
