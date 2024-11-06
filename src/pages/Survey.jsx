import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import shuffle from "../components/Shuffle";
import questionsData from "./../data/featureData";
import DRLLOGO from "./../assets/Bottom_Logo.png";

const Survey = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleOptionSelect = (index) => {
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter((i) => i !== index));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  const handleClick = () => {
    if (selectedOptions.length === 3) {
      navigate("/logo");
    }
  };

  return (
    <div className="screenHeight w-full flex-col bg-[#ffe9ff] border-[2px]">
      <Header />
      <div className="px-6 relative w-full mainBox2">
        <div
          className=" flex flex-col gap-6 pt-6 items-center justify-center"
          style={{ height: "90%", paddingBottom: "30px" }}
        >
          {questions.length > 0 && !gameOver && (
            <div className="text-center font-extrabold text-[#38013a] text-xl px-4 leading-6">
              {questions[currentQuestion].question}
            </div>
          )}
          {questions.length > 0 && (
            <div className="flex flex-col items-center  px-0">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`ansBtn2 ${
                    selectedOptions.includes(index) ? "selected" : ""
                  }`}
                  data-personality={option.personality}
                  disabled={
                    selectedOptions.length === 3 &&
                    !selectedOptions.includes(index)
                  }
                >
                  <span className="px-4">
                    <span className="font-bold text-[#000000]">
                      {option.topic}
                    </span>
                    <br />
                    <span
                      className="text-[#000000] leading-3 "
                      dangerouslySetInnerHTML={{ __html: option.data }}
                    ></span>
                    <br />
                  </span>
                </button>
              ))}
            </div>
          )}
          {/* <div className="text-[8px]">1. Data on File, GE HealthCare</div> */}
        </div>

        <button
          onClick={handleClick}
          className={`goBtn ${
            selectedOptions.length === 3 ? "enabled" : "disabled"
          }`}
          disabled={selectedOptions.length !== 3}
        >
          ENTER
        </button>
      </div>
      <div className=" flex py-[2rem]  text-[4px] text-white px-0 w-full bg-[#642d90]">
        <div className="flex flex-col w-[45%] items-start p-2  ">
          <p>Omnipaque is a trademark of GE HealthCare</p>
          <p>
            GE is a trademark of General Electric Company used under trademark
            license.
          </p>
          <p>@2024 GE HealthCare</p>
          <p>JB00405BS/11/2024</p>
        </div>
        <div className="flex flex-col w-[55%] items-end p-2">
          <p className="text-[8px]">Wipro GE HealthCare Private Limited</p>
          <p>22nd Floor,Block A, Building 5, DLF Epitome</p>
          <p>Gurugram-122002, Haryana</p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
