import { Routes, Route } from "react-router-dom";

import axios from "axios";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/layout";
import Lecture from "./pages/Lectrue/Lecture";

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
        <Route path="/lecture" element={<Lecture />} />
      </Routes>
    </Layout>
  );
}
export default App;
