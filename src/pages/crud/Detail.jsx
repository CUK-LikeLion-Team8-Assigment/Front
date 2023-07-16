import { useEffect, useContext, useState } from "react";
import { AssessmentStateContext } from "../../App";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const assessmentList = useContext(AssessmentStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (assessmentList.length >= 1) {
      const targetAssessment = assessmentList.find(
        (it) => parseInt(it.userId) === parseInt(id)
      );
      if (targetAssessment) {
        setData(targetAssessment);
      } else {
        //일기가 없을때
        alert("없는글입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, assessmentList]);

if (!data) {
  return <div>로딩중입니다...</div>;
} else {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div>
              <section>
                <h4>작성날짜</h4>
                <div className="flex justify-center items-center">
                  <div className="block mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {
                      new Date(parseInt(data.lectureYear))
                        .toISOString()
                        .split("T")[0]
                    }
                  </div>
                </div>
              </section>
            </div>
            <section>
             
            </section>
            <section>
              <h4>강의명</h4>
              <div className="flex justify-center items-center">
                <div className="w-1/2 block mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <div>{data.lectureName}</div>
                </div>
              </div>
            </section>
            <section>
              <h4>평가</h4>
              <div className="flex justify-center items-center">
                <div className="block h-40 w-64 mt-1 mb-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <div>{data.evaluationContent}</div>
                </div>
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
                  뒤로가기
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
};
export default Detail;
