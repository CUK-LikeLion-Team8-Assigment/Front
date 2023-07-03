import { Routes, Route } from "react-router-dom";

import axios from "axios";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/layout";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  axios
    .get("https://my-json-server.typicode.com/typicode/demo/posts")
    .then(function (response) {
      console.log(response);
    });

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
