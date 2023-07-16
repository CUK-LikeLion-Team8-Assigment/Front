import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ListItem = ({ id, content, lecture, date, score }) => {
  const navigate = useNavigate();

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    navigate(`/detail/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  const [recommend, setRecommend] = useState(0);

  const handleRecommend = () => {
    setRecommend(recommend + 1);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className=" flex mb-3 items-center justify-between w-full p-2  hover:bg-gray-100 cursor-pointer border-2 rounded-lg">
          <div className="w-10/12" onClick={goDetail}>
            <div className="info_wrapper ">
              <div className="text-sm">작성날짜 : {strDate}</div>
              <div className="font-bold text-l">과목명 : {lecture}</div>
              <div>{content.slice(0, 25)}</div>
              <div>만족동 : {score}</div>
            </div>
          </div>
          <div className="btn_wrapper">
            <button
              onClick={goEdit}
              className="text-sm border justify-end border-indigo-500 text-indigo-500 rounded-md px-2 py-1 m-1 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              수정하기
            </button>
            <div className="btn_wrapper">
              <button
                onClick={handleRecommend}
                className="text-sm border justify-endborderindigo-500 text-indigo-500 rounded-md px-2 py-1 m-1 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus: shadow-outline"
              >
                추천하기
              </button>
              {recommend}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
