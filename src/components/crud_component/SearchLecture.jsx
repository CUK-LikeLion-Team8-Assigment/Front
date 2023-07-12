const Searchlecture = ({ onSearch }) => {
  const handleSubmit = (e) => {
  
    const userInput = e.target.value;
    onSearch(userInput);
  };

  return (
    <div className="w-48 relative text-lg bg-transparent text-gray-800">

        <div className="flex ml-1 mr-2 mb-2 items-center border-b border-b-1 border-gray-400 py-2">
          <input
            className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="과목명을 입력하세요"
            style={{ fontSize: "15px" }}
            name="search"
            onChange={handleSubmit}
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          </button>
        </div>
 
    </div>
  );
};

export default Searchlecture;
