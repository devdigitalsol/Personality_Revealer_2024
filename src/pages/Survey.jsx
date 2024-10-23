import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import shuffle from "../components/Shuffle";
import questionsData from "./../data/featureData";

const Survey = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const shuffledQuestions = shuffle(questionsData);
    setQuestions(shuffledQuestions);
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
      navigate("/description");
    }
  };

  return (
    <div className="screenHeight w-full bg-[#ffe9ff] border-[2px]">
      <Header />
      <div className="px-6 relative w-full mainBox2">
        <div
          className="borderCustom flex flex-col gap-6 pt-6 items-center justify-center"
          style={{ height: "90%" }}
        >
          {questions.length > 0 && !gameOver && (
            <div className="text-center font-extrabold text-[#38013a] text-xl px-4 leading-6">
              {questions[currentQuestion].question}
            </div>
          )}
          {questions.length > 0 && (
            <div className="flex flex-col items-center gap-4 px-0">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`ansBtn ${
                    selectedOptions.includes(index) ? "selected" : ""
                  }`}
                  data-personality={option.personality}
                  disabled={
                    selectedOptions.length === 3 &&
                    !selectedOptions.includes(index)
                  }
                >
                  <span className="px-4">{option.data}</span>
                </button>
              ))}
            </div>
          )}
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
    </div>
  );
};

export default Survey;
