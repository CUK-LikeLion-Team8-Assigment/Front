import { Routes, Route, Navigate } from "react-router-dom";
import React, { useRef, useEffect, useReducer } from "react";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/layout";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Lecture from "./pages/Lectrue/Lecture";
import Detail from "./pages/crud/Detail";
import New from "./pages/crud/New";
import Edit from "./pages/crud/Edit";
import Assessment from "./pages/crud/Assessment";
import { useSelector } from "react-redux";

const AssessmentData = [
  {
    id: 1,
    score: 1,
    lecture: "자료구조",
    content: "어렵다",
    date: 1687513053255,
  },
  {
    id: 2,
    score: 2,
    lecture: "이산수학",
    content: "조금 어렵다",
    date: 1687513053256,
  },
  {
    id: 3,
    score: 3,
    lecture: "논회설",
    content: "많이 어렵다",
    date: 1687513053257,
  },
  {
    id: 4,
    score: 4,
    lecture: "컴퓨터구조",
    content: "많이많이 어렵다",
    date: 1687513053257,
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
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
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
  const onCreate = (date, lecture, content, score) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataID.current,
        date: new Date(date).getTime(),
        lecture,
        content,
        score,
      },
    });
    dataID.current += 1;
  }; // 새로운 일기 아이템을 전달받아 data 라는 이름으로 전달 => reducer 함수의 CREATE 는 스프레드연산자를 활용해 받은 데이터를 newItem 으로
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //onEdit
  const onEdit = (targetId, date, lecture, content, score) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        lecture,
        content,
        score,
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
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/home"
              element={isLoggedIn ? <Assessment /> : <Navigate to="/login" />}
            />
            <Route
              path="/detail/:id"
              element={isLoggedIn ? <Detail /> : <Navigate to="/login" />}
            />
            <Route
              path="/New"
              element={isLoggedIn ? <New /> : <Navigate to="/login" />}
            />
            <Route
              path="/edit/:id"
              element={isLoggedIn ? <Edit /> : <Navigate to="/login" />}
            />
            <Route
              path="/Assessment"
              element={isLoggedIn ? <Assessment /> : <Navigate to="/login" />}
            />
            <Route
              path="/lecture"
              element={isLoggedIn ? <Lecture /> : <Navigate to="/login" />}
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
