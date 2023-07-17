import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout/layout";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home/Home";


function App() {
  return (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Layout>
  );
}

export default App;
export const AssessmentStateContext = React.createContext();
export const AssessmentDispatchContext = React.createContext();
