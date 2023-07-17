import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.patch("/logout", {
        withCredentials: true,
      });
      console.log("logout successful");

      navigate("/login");
    } catch (error) {
      console.error("logout error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className=" text-white font-bold py-2 px-4 rounded"
    >
      로그아웃
    </button>
  );
};

export default Logout;
