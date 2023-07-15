import { Routes, Route, Navigate } from "react-router-dom";
import React, { useRef, useEffect, useReducer } from "react";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/layout";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Detail from "./pages/crud/Detail";
import New from "./pages/crud/New";
import Edit from "./pages/crud/Edit";
import Assessment from "./pages/crud/Assessment";
import { useSelector } from "react-redux";

const AssessmentData = [
  {
    userID: 1,
    lectureName: "자료구조",
    professorName: "황병연",
    lectureYear: 2021,
    semesterDivide: 1,
    lectureDivide: "전공",
    evaluationTitle: "평가 제목입니다.",
    evaluationContent: "어렵다",
    totalScore: "B",
    creditScore: "B",
    comfortableScore: "C",
    lectureScore: "C",

  },
  {
    userID: 2,
    lectureName: "이산수학",
    professorName: "교수님 이름",
    lectureYear: 2022,
    semesterDivide: 2,
    lectureDivide: "전공",
    evaluationTitle: "평가 제목입니다.",
    evaluationContent: "조금 어렵다",
    totalScore: "A",
    creditScore: "B",
    comfortableScore: "B",
    lectureScore: "C",

  },
  {
    userID: 3,
    lectureName: "논회설",
    professorName: "교수님 이름",
    lectureYear: 2020,
    semesterDivide: 1,
    lectureDivide: "전공",
    evaluationTitle: "평가 제목입니다.",
    evaluationContent: "많이 어렵다",
    totalScore: "B",
    creditScore: "C",
    comfortableScore: "C",
    lectureScore: "D",

  },
  {
    userID: 4,
    lectureName: "컴퓨터구조",
    professorName: "교수님 이름",
    lectureYear: 2023,
    semesterDivide: 2,
    lectureDivide: "전공",
    evaluationTitle: "평가 제목입니다.",
    evaluationContent: "많이많이 어렵다",
    totalScore: "C",
    creditScore: "C",
    comfortableScore: "D",
    lectureScore: "D",

  },
];


const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.userID !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.userID === action.data.userID ? { ...action.data } : it
      );
      break;
    } //전달받은 아이디와 일치하는 요소를 찾아낸 다음에 일치하는 요소에는 action.data 를 전달하게 함
    default:
      return state;
  }
  return newState;
};

function App() {
  const [data, dispatch] = useReducer(reducer, AssessmentData);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: AssessmentData,
    });
    console.log(data);
  }, []);

  const dataID = useRef(5);
  //CREATE
  const onCreate = (
    lectureName,
    professorName,
    lectureYear,
    semesterDivide,
    lectureDivide,
    evaluationTitle,
    evaluationContent,
    totalScore,
    creditScore,
    comfortableScore,
    lectureScore
  ) => {
    dispatch({
      type: "CREATE",
      data: {
        userID: dataID.current,
        lectureName,
        professorName,
        lectureYear: new Date(lectureYear).getTime(),
        semesterDivide,
        lectureDivide,
        evaluationTitle,
        evaluationContent,
        totalScore,
        creditScore,
        comfortableScore,
        lectureScore,
      },
    });
    dataID.current += 1;
  }; // 새로운 일기 아이템을 전달받아 data 라는 이름으로 전달 => reducer 함수의 CREATE 는 스프레드연산자를 활용해 받은 데이터를 newItem 으로
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //onEdit
  const onEdit = (
    targetId,
    lectureName,
    professorName,
    lectureYear,
    semesterDivide,
    lectureDivide,
    evaluationTitle,
    evaluationContent,
    totalScore,
    creditScore,
    comfortableScore,
    lectureScore
  ) => {
    dispatch({
      type: "EDIT",
      data: {
        userID: targetId,
        lectureName,
        professorName,
        lectureYear: new Date(lectureYear).getTime(),
        semesterDivide,
        lectureDivide,
        evaluationTitle,
        evaluationContent,
        totalScore,
        creditScore,
        comfortableScore,
        lectureScore,
      },
    });
  };

  return (
    <AssessmentStateContext.Provider value={data}>
      <AssessmentDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <Layout>
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Assessment /> : <Navigate to="/login" />}
            />
            <Route
              path="/detail/:id"
              element={isLoggedIn ? <Detail /> : <Navigate to="/login" />}
            />
            <Route
              path="/new"
              element={isLoggedIn ? <New /> : <Navigate to="/login" />}
            />
            <Route
              path="/edit/:id"
              element={isLoggedIn ? <Edit /> : <Navigate to="/login" />}
            />

            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Layout>
      </AssessmentDispatchContext.Provider>
    </AssessmentStateContext.Provider>
  );
}

export default App;
export const AssessmentStateContext = React.createContext();
export const AssessmentDispatchContext = React.createContext();
