import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import axios from "axios";

function App() {
  axios.get("https://my-json-server.typicode.com/typicode/demo/posts").then(function (response) {
    console.log(response);
  });
  
  return (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
  );
}
export default App;