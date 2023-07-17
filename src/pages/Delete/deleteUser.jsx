import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteUsers = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [deleteInError, setDeleteInError] = useState(false);

  const handleDeleteAccount = async () => {
    try {
      const userData = {
        userID,
        userPassword,
      };

      await axios.delete("/deleteuser", {
        withCredentials: true,
        data: userData,
      });
      console.log("Account deleted successfully");

      navigate("/login");
    } catch (error) {
      setDeleteInError(error.response?.status === 401);
      alert("삭제할 회원정보가 없습니다.");
    }
  };

  return (
    <div>
      <form className="mx-auto w-64">
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
          {deleteInError && (
            <div className="text-red-600 font-bold mt-2">
              삭제할 아이디와 비밀번호가 일치하지 않습니다.
            </div>
          )}
        </div>

        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded"
        >
          회원탈퇴
        </button>
      </form>
    </div>
  );
};

export default DeleteUsers;
