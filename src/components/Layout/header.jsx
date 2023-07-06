import { useState } from "react";
import Sidebar from "./sidebar";
import { FaGripVertical } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const username = location.state?.username;

  const toggleSide = () => {
    setIsSidebarOpen(true);
  };

  return (
    <nav className=" w-full top-0 left-0 z-50 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 xl:px-20 md:px-10 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white">
            강의평가
          </span>
        </a>
        <div className="flex flex-row">
          {/* <div className="text-center mt-2">
            {username ? (
              <div className="text-sm font-medium text-gray-600 dark:text-gray-200">
                {username}님 환영합니다
              </div>
            ) : (
              <div className="text-sm font-medium text-red-600">
                실패했습니다
              </div>
            )}
          </div> */}
          <button
            onClick={toggleSide}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200   dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <FaGripVertical size={24} />
          </button>
        </div>

        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
    </nav>
  );
};

export default Header;
