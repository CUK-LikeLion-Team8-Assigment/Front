import React, { useState } from "react";
import axios from "axios";

const LogoutButton = () => {
  const handleLogout = (e) => {
    e.preventDefault();

    axios
      .patch(
        "https://f6227c41-ad14-49d4-8e8d-6179ca749e9a.mock.pstmn.io/logout"
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleLogout}
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
