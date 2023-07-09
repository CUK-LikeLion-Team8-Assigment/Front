import React, { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutButton from "../../pages/LogOut";

function Sidebar({ isOpen, setIsOpen }) {
  const outside = useRef(null);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (outside.current && !outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <div
      id="sidebar"
      ref={outside}
      className={`z-5 px-12 border-l-2 border-white bg-gray-800 h-full right-0 top-0 fixed transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute left-0 p-4">
        <FaTimes
          className="cursor-pointer"
          size={32}
          color="red"
          onClick={toggleSide}
          onKeyDown={toggleSide}
        />
      </div>

      <ul className="text-center font-bold text-white mt-20 sm:text-[8px]">
        {isLoggedIn ? (
          <li className="my-8 text-base">
            <Link to="/">
              <LogoutButton />
            </Link>
          </li>
        ) : (
          <>
            <li className="my-8 text-base">
              <Link to="/login">로그인</Link>
            </li>
            <li className="my-8 text-base">
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
        <li className="my-8 text-base">
          <Link to="/assessment">강의평가</Link>
        </li>
        <li className="my-8 text-base">
          <Link to="/lecture">강의목록</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
