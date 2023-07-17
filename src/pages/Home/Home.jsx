import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "../../components/crud_component/ListItem";

const Home = () => {
  const [userId, setUserId] = useState("");
  const [lectureName, setLectureName] = useState("");
  const [professorName, setProfessorName] = useState("");
  const [lectureYear, setLectureYear] = useState(0);
  const [semesterDivide, setSemesterDivide] = useState("");
  const [lectureDivide, setLectureDivide] = useState("");
  const [evaluationTitle, setEvaluationTitle] = useState("");
  const [evaluationContent, setEvaluationContent] = useState("");
  const [totalScore, setTotalScore] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [comfortableScore, setComfortableScore] = useState("");
  const [lectureScore, setLectureScore] = useState("");
  const [evaluationData, setEvaluationData] = useState([]);
  const [postId, setPostId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/evaluation/${postId}`
        );
        setEvaluationData((prevData) => [...prevData, response.data]);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [postId]);

  const sendData = async () => {
    if (!evaluationTitle) {
      console.log("evaluationTitle is required.");
      return;
    }
    const url = "http://localhost:8080/evaluation/post";
    const data = {
      userId,
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
      lectureScore,
    };

    try {
      await axios.post(url, data);
      console.log("Post request successful!");
      setPostId((prevId) => prevId + 1);
      setUserId("");
      setLectureName("");
      setProfessorName("");
      setLectureYear(0);
      setSemesterDivide("");
      setLectureDivide("");
      setEvaluationTitle("");
      setEvaluationContent("");
      setTotalScore("");
      setCreditScore("");
      setComfortableScore("");
      setLectureScore("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!evaluationData) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4">강의평 작성</h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">작성자:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="작성자"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">강의명:</label>
          <input
            type="text"
            value={lectureName}
            onChange={(e) => setLectureName(e.target.value)}
            placeholder="강의명"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">교수명:</label>
          <input
            type="text"
            value={professorName}
            onChange={(e) => setProfessorName(e.target.value)}
            placeholder="교수명"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">수강년도:</label>
          <input
            type="number"
            value={lectureYear}
            onChange={(e) => setLectureYear(parseInt(e.target.value))}
            placeholder="수강년도"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">학기:</label>
          <input
            type="text"
            value={semesterDivide}
            onChange={(e) => setSemesterDivide(e.target.value)}
            placeholder="학기"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">
            전공선택(전공,자교):
          </label>
          <input
            type="text"
            value={lectureDivide}
            onChange={(e) => setLectureDivide(e.target.value)}
            placeholder="전공선택(전공,자교)"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">평가제목:</label>
          <input
            type="text"
            value={evaluationTitle}
            onChange={(e) => setEvaluationTitle(e.target.value)}
            placeholder="평가제목"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">평가내용:</label>
          <input
            type="text"
            value={evaluationContent}
            onChange={(e) => setEvaluationContent(e.target.value)}
            placeholder="평가내용"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">합산 점수:</label>
          <input
            type="text"
            value={totalScore}
            onChange={(e) => setTotalScore(e.target.value)}
            placeholder="합산 점수"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">교수 평가점수:</label>
          <input
            type="text"
            value={creditScore}
            onChange={(e) => setCreditScore(e.target.value)}
            placeholder="교수 평가점수"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">수업 평가점수:</label>
          <input
            type="text"
            value={comfortableScore}
            onChange={(e) => setComfortableScore(e.target.value)}
            placeholder="수업 평가점수"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">강의평가 점수:</label>
          <input
            type="text"
            value={lectureScore}
            onChange={(e) => setLectureScore(e.target.value)}
            placeholder="강의평가 점수"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={sendData}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            제출
          </button>
        </div>
      </div>
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4">최근 강의평</h1>
        {evaluationData.map((data) => (
          <ListItem
            key={data.userId}
            userId={data.userId}
            evaluationTitle={data.evaluationTitle}
            evaluationContent={data.evaluationContent}
            lectureName={data.lectureName}
            lectureYear={data.lectureYear}
            semesterDivide={data.semesterDivide}
            lectureDivide={data.lectureDivide}
            totalScore={data.totalScore}
            creditScore={data.creditScore}
            comfortableScore={data.comfortableScore}
            lectureScore={data.lectureScore}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
