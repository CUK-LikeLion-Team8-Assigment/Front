import React from "react";
import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Searchlecture from "./SearchLecture";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 후기만" },
  { value: "bad", name: "안좋은 후기만" },
  { value: "recommend", name: "추천순" },
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block mr-1 mt-1 mb-2 rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
});

const AssessmentList = ({ assessmentList }) => {
  const [userInput, setUserInput] = useState("");

  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.score) >= 3;
      } else {
        return parseInt(item.score) < 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } //최신순인지 오래된순인지 if 문으로 분기를 달아 정렬된 리스트로 반환함
      else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(assessmentList)); //배열을 json화시켜서 문자열을 바꿈
    //바꾸는 이유는 위의diaryList를 오염시키지 않기 위해서

    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const searchList = (itemList) => {
      return itemList.lecture.includes(userInput);
    };

    const sortedList = filteredList.sort(compare);
    const searchedList = sortedList.sort(searchList);
    return searchedList;
  }; //최신순인지 오래된순인지 if 문으로 분기를 달아 정렬된 리스트로 반환함

  const handleSearch = (input) => {
    setUserInput(input);
  };
  const processedList = getProcessedDiaryList(); // getProcessedDiaryList의 결과를 변수에 저장

  return (
    <div>
      <div className="w-10/12 flex justify-end items-center">
        <div className="flex">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div>
          <Searchlecture onSearch={handleSearch} />
        </div>
        <div>
          <button
            onClick={() => navigate("/new")}
            className="text-sm border justify-end border-indigo-500 text-indigo-500 rounded-md px-2 py-1.5 mb-1 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            평가 등록하기
          </button>
        </div>
      </div>

      {processedList.map((it) => {
        // userInput에 입력된 값만 출력하도록 조건을 추가
        if (userInput && !it.lecture.includes(userInput)) {
          return null; // 입력된 값이 포함되지 않으면 null을 반환하여 렌더링하지 않음
        }
        return <ListItem key={it.id} {...it} />;
      })}
    </div>
  );
};

AssessmentList.defaultProps = {
  assessmentList: [],
};

export default AssessmentList;
