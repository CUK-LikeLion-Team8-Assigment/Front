import React from "react";
import TestCode from "../Test";
import LogoutButton from "../LogOut";

const Home = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      <TestCode />
      <LogoutButton />
    </h1>
  );
};

export default Home;
