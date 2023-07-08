import React from "react";
import lion from "../../assets/likelion.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  axios
    .post("http://localhost:8080/logout")
    .then((response) => {
      // 로그아웃 요청이 성공한 경우
      console.log(response.data);
    })
    .catch((error) => {
      // 로그아웃 요청이 실패한 경우
      console.error(error);
    });
  const navigate = useNavigate();
  return (
    <div>
      <Logo>
        <img src={lion} alt="lion" className="w-[400px] h-[300px] m-auto" />
      </Logo>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <li
          onClick={() => {
            navigate("/lecture");
          }}
        >
          <button>강의추천</button>
        </li>
        <li>
          <button>강의평가</button>
        </li>

        <li>
          <button>로그아웃</button>
        </li>
      </ul>
    </div>
  );
};

const Logo = styled.div`
  margin-top: 10px;
`;

export default Home;
