import axios from "axios";
import styled from "styled-components";
import { useState } from "react";

function Lecture() {
  //   const evaluationID = "your_evaluation_id";
  //   axios
  //     .post(`http://localhost:8080/likey/${evaluationID}`)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  const [lecture, setLecture] = useState([
    "자료구조",
    "논리회로설계",
    "운영체제",
  ]);
  return (
    <div>
      {lecture.map(function (data) {
        return (
          <Box>
            <h3>{data} </h3>
            <hr />
            <button
              style={{
                fontSize: "30px",
                float: "right",
              }}
              onClick={() => {}}
            >
              👍
            </button>
          </Box>
        );
      })}
    </div>
  );
}

const Box = styled.div`
  width: 500px;
  height: 200px;
  background-color: lightgray;
  margin: auto;
  margin-top: 15px;
`;
export default Lecture;
