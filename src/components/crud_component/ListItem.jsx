
const ListItem = ({ evaluationTitle, evaluationContent, lectureName,lectureYear, 
semesterDivide, lectureDivide,totalScore, creditScore, comfortableScore, lectureScore }) => {


  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";


  return (
    <>
      <div className="flex justify-center items-center">
        <div className=" flex mb-3 items-center justify-between w-full p-2  hover:bg-gray-100 cursor-pointer border-2 rounded-lg">
          <div className="w-10/12">
            <div className="info_wrapper ">
              <div className="text-sm">
                수강시기 : {lectureYear} 년도 {semesterDivide}학기
              </div>
              <div className="font-bold text-l">글제목 : {evaluationTitle}</div>
              <div>
                과목명 : {lectureName} | 구분 : {lectureDivide}
              </div>
              <div>{evaluationContent}</div>
              <div>
                총점 : {totalScore} | 교수평가 : {creditScore} |
                성적받기좋은정도 : {comfortableScore} | 강의력 : {lectureScore}
              </div>
            </div>
          </div>
          <div className="btn_wrapper">
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
