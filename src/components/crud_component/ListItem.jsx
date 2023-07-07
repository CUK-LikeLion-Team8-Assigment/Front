import { useNavigate } from "react-router-dom";

const ListItem = ({ id, content, lecture,date, score }) => {
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

  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="w-9/12 flex mb-3 items-center justify-between w-full p-2  hover:bg-gray-100 cursor-pointer border-2 rounded-lg"
        >
          <div
          className="w-10/12" 
          onClick={goDetail}>
            <div className="info_wrapper ">
              <div className="text-sm">작성날짜 : {strDate}</div>
              <div className="font-bold text-l">과목명 : {lecture}</div>
              <div>{content.slice(0, 25)}</div>
              <div>만족도 : {score}</div>
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