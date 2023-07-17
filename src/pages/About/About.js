import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const members = [
    {
      name: "🦁장광진",
      part: "Front",
      work: "로그인 기능",
      git: "https://github.com/wkdrhkdwls",
    },
    {
      name: "🦁김채연",
      part: "Front",
      work: "게시판 기능",
      git: "https://github.com/kimchchchchchche",
    },
    {
      name: "🦁서은",
      part: "Front",
      work: "About",
      git: "https://github.com/WestSilver99",
    },
    {
      name: "🦁이가영",
      part: "Back",
      work: "준비중",
      git: "https://github.com/GaYeongLee0419",
    },
    {
      name: "🦁주채연",
      part: "Back",
      work: "준비중",
      git: "https://github.com/joochaeyeon",
    },
    {
      name: "🦁유우식",
      part: "Back",
      work: "준비중",
      git: "https://github.com/YWSIK",
    },
  ];

  const handleButtonClick = (gitUrl) => {
    window.open(gitUrl, "_blank"); // 새 창에서 열기
  };

  return (
    <>
      <div className="text-white text-center text-2xl">
        <span>🦁멋쟁이사자처럼 가톨릭대학교 8조 해커톤 대비 과제🦁</span>
      </div>
      <div className="flex flex-wrap justify-center">
        {members.map(function (item, index) {
          return (
            <div
              key={index}
              className="w-80 h-80 bg-transparent border border-btn-color mt-20 text-center mx-auto flex flex-col rounded-lg"
            >
              <span className="text-white text-lg">{item.name}</span>
              <span className="text-white">{item.part}</span>
              <hr className="border-btn-color my-4" />
              <span className="text-white">{item.work}</span>
              <div className="flex justify-center">
                <button
                  className="mt-20 w-20 text-btn-color rounded border border-btn-color"
                  onClick={() => handleButtonClick(item.git)}
                >
                  Github
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default About;
