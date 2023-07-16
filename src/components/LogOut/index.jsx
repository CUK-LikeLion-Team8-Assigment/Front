import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post("http://localhost:8080/logout")
      .then((response) => {
        console.log("로그아웃 성공", response.data);
        dispatch(logout());
        localStorage.setItem("isLoggedIn", "false");
        navigate("/login");
      })
      .catch((error) => {
        console.error("로그아웃 실패", error);
      });
  };

  return (
    <button onClick={handleLogout} className="text-blue-600 font-bold">
      로그아웃
    </button>
  );
};

export default Logout;
