import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/layout";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Lecture from "./pages/Lectrue/Lecture";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lecture" element={<Lecture />} />
      </Routes>
    </Layout>
  );
}

export default App;
