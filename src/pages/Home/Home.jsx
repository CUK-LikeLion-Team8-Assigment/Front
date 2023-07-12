import React from "react";
import lion from "../../assets/likelion.jpg";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Logo>
        <img src={lion} alt="lion" className="w-[400px] h-[300px] m-auto" />
      </Logo>
    </div>
  );
};

const Logo = styled.div`
  margin-top: 10px;
`;

export default Home;
