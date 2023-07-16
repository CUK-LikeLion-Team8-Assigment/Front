import { useNavigate } from "react-router-dom";

const ListItem = ({ userId, evaluationTitle, evaluationContent, lectureName,lectureYear, 
semesterDivide, lectureDivide,totalScore, creditScore, comfortableScore, lectureScore }) => {
  const navigate = useNavigate();

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";



  const goDetail = () => {
    navigate(`/detail/${userId}`);
  };

  const goEdit = () => {
     console.log("수정하기 버튼 클릭됨!"); 
    navigate(`/edit/${userId}`);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-9/12 flex mb-3 items-center justify-between w-full p-2  hover:bg-gray-100 cursor-pointer border-2 rounded-lg">
          <div className="w-10/12" onClick={goDetail}>
            <div className="info_wrapper ">
              <div className="text-sm">
                수강시기 : {lectureYear} 년도 {semesterDivide}학기
              </div>
              <div className="font-bold text-l">글제목 : {evaluationTitle}</div>
              <div>
                과목명 : {lectureName} | 구분 : {lectureDivide}
              </div>
              <div>{evaluationContent}</div>
              <div>총점 : {totalScore} | 교수평가 : {creditScore} | 성적받기좋은정도 : {comfortableScore} | 강의력 : {lectureScore}</div>

            </div>
          </div>
          <div className="btn_wrapper">
            <button
              onClick={goEdit}
              className="text-sm border justify-end border-indigo-500 text-indigo-500 rounded-md px-2 py-1 m-1 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              수정하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default ListItem;