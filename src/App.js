import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout/layout";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home/Home";
import DeleteUsers from "./pages/Delete/deleteUser";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/withdrawal" element={<DeleteUsers />} />
      </Routes>
    </Layout>
  );
}

export default App;
