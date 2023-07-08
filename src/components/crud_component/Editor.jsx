import { useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AssessmentDispatchContext } from "../../App";

export const getStringDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().slice(0, 10);
};

const Editor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [score, setScore] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));
  const [lecture, setLecture] = useState("");

  const { onCreate, onEdit, onRemove } = useContext(AssessmentDispatchContext);

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, lecture, content, score);
      } else {
        onEdit(originData.id, date, lecture, content, score);
      }
    }
    //onCreate 함수는 App.js 에서 date, content, emotion 을 받았었음
    navigate("/", { replace: true });
  };

  // const handleRemove = () => {
  //   if (window.confirm("정말 삭제하시겠습니까?")) {
  //     onRemove(originData.id);
  //     navigate("/", { replace: true });
  //   }
  // };

  useEffect(() => {
    if (isEdit) {
      const originDate = new Date(parseInt(originData.date));
      setDate(getStringDate(originDate));
      setScore(originData.score);
      setLecture(originData.lecture);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          {/* 폼 요소들 */}
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div>
                <section>
                  <h4>작성날짜</h4>
                  <div className="flex justify-center items-center">
                    <input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      type="date"
                      className="block mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </section>
              </div>
              <section>
                <h4>만족도</h4>
                <div className="flex justify-center items-center">
                  <select
                    name="score"
                    value={score}
                    onChange={(e) => {
                      setScore(Number(e.target.value));
                    }}
                    className="block mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </section>
              <section>
                <h4>강의명</h4>
                <div className="flex justify-center items-center">
                  <input
                    placeholder="강의명"
                    value={lecture}
                    onChange={(e) => {
                      setLecture(e.target.value);
                    }}
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="block mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </section>
              <section>
                <h4>평가 작성하기</h4>
                <div className="flex justify-center items-center">
                  <textarea
                    placeholder="평가를 작성해주세요"
                    ref={contentRef}
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    className="block h-40 w-64 mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </section>
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
