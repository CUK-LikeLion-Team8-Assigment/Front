import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/actions";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/logout")
      .then((response) => {
        console.log(response.data);
        dispatch(logout());
        localStorage.setItem("isLoggedIn", "false");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutButton;
