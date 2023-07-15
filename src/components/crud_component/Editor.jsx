import { useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AssessmentDispatchContext } from "../../App";

export const getStringDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().slice(0, 10);
};

const Editor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [evaluationContent, setEvaluationContent] = useState("");
  const [lectureYear, setLectureYear] = useState(2023);
  const [lectureName, setLectureName] = useState("");
  const [professorName, setProfessorName] = useState("");
  const [semesterDivide, setSemesterDivide] = useState("1");
  const [lectureDivide, setLectureDivide] = useState("전공");
  const [evaluationTitle, setEvaluationTitle] = useState("");
  const [totalScore, setTotalScore] = useState("A");
  const [comfortableScore, setComfortableScore] = useState("A");
  const [creditScore, setCreditScore] = useState("A");
  const [lectureScore, setLectureScore] = useState("A");

  const { onCreate, onEdit, onRemove } = useContext(AssessmentDispatchContext);

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (evaluationContent.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
     
        // 새로운 일기 작성
        onCreate(
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
        );
      } else {
        // 일기 수정
        onEdit(
          originData.userID,
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
        );
      }
    }
    //onCreate 함수는 App.js 에서 date, content, emotion 을 받았었음
    navigate("/", { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(originData.userID);
      navigate(-1);
    }
  };

  useEffect(() => {
    if (isEdit && originData ) {
      setLectureYear(originData.lectureYear);
      setLectureName(originData.lectureName);
      setEvaluationContent(originData.evaluationContent);
      setComfortableScore(originData.comfortableScore)
      setEvaluationTitle(originData.evaluationTitle)
      setCreditScore(originData.creditScore)
      setLectureScore(originData.lectureScore)
      setTotalScore(originData.totalScore)
      setProfessorName(originData.professorName)
    }
  }, [isEdit, originData]);

const getYearOptions = (startYear, endYear) => {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
};
  const startYear = 2005;
  const endYear = 2023;
  const yearOptions = getYearOptions(startYear, endYear);


  const handleYearChange = (e) => {
    setLectureYear(Number(e.target.value));
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          {/* 폼 요소들 */}
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div>
                <h4>수강년도</h4>
                <div className="flex justify-center items-center">
                  <select
                    value={lectureYear}
                    onChange={handleYearChange}
                    className="block mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>{" "}
                <h4>수강 학기</h4>
                <select
                  name="score"
                  value={semesterDivide}
                  onChange={(e) => {
                    setSemesterDivide(Number(e.target.value));
                  }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>
              </div>
              <h4>과목 구분</h4>
              <select
                name="score"
                value={lectureDivide}
                onChange={(e) => {
                  setLectureDivide(e.target.value);
                }}
                className="w-32 mx-auto"
              >
                <option value="전공">전공</option>
                <option value="교양">교양</option>
              </select>

              <h4>강의명</h4>
              <div className="flex justify-center items-center">
                <input
                  placeholder="강의명"
                  value={lectureName}
                  onChange={(e) => {
                    setLectureName(e.target.value);
                  }}
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <h4>교수명</h4>
              <div className="flex justify-center items-center">
                <input
                  placeholder="교수명"
                  value={professorName}
                  onChange={(e) => {
                    setProfessorName(e.target.value);
                  }}
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <h4>평가 작성하기</h4>
              <div className="flex justify-center items-center">
                <input
                  placeholder="제목"
                  value={evaluationTitle}
                  onChange={(e) => {
                    setEvaluationTitle(e.target.value);
                  }}
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex justify-center items-center">
                <textarea
                  placeholder="평가를 작성해주세요"
                  ref={contentRef}
                  value={evaluationContent}
                  onChange={(e) => {
                    setEvaluationContent(e.target.value);
                  }}
                  className="block h-40 w-64 mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <h4>총점</h4>
              <select
                name="score"
                value={totalScore}
                onChange={(e) => {
                  setTotalScore(e.target.value);
                }}
                className="w-32 mx-auto"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <h4>교수평가</h4>
              <select
                name="score"
                value={creditScore}
                onChange={(e) => {
                  setCreditScore(e.target.value);
                }}
                className="w-32 mx-auto"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <h4>성적받기좋은정도</h4>
              <select
                name="score"
                value={comfortableScore}
                onChange={(e) => {
                  setComfortableScore(e.target.value);
                }}
                className="w-32 mx-auto"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <h4>강의력</h4>
              <select
                name="score"
                value={lectureScore}
                onChange={(e) => {
                  setLectureScore(e.target.value);
                }}
                className="w-32 mx-auto"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <section>
                <div>
                  <button
                    onClick={() => {
                      navigate(-1);
                    }}
                    className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                  >
                    취소하기
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                  >
                    {isEdit ? "수정완료" : "작성완료"}
                  </button>
                  {isEdit && (
                    <button
                      onClick={handleRemove}
                      className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                    >
                      삭제하기
                    </button>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
