import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Options from "../components/Options";
import shuffle from "../components/Shuffle";
import questionsData from "./../data/featureData";

const Survey = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const shuffledQuestions = shuffle(questionsData);
    setQuestions(shuffledQuestions);
  }, []);

  const handleClick = () => {
    navigate("/questions");
  };

  return (
    <div className="screenHeight w-full bg-[#ffe9ff] border-[2px]">
      <Header />
      <div className="px-6 relative w-full mainBox2  ">
        <div
          className="borderCustom flex flex-col gap-6 pt-6 items-center justify-center"
          style={{ height: "90%" }}
        >
          {/* <div className="scoreBoard flex items-center justify-center mb-auto mt-0">
            <div className="w-20 h-8 text-center text-[#662d91] font-bold text-xl">
              {`${currentQuestion + 1} / ${totalQuestions}`}
            </div>
          </div> */}
          {questions.length > 0 && !gameOver && (
            <div className="text-center font-extrabold text-[#38013a] text-xl px-4 leading-6">
              {questions[currentQuestion].question}
            </div>
          )}
          {questions.length > 0 && (
            <Options
              options={questions[currentQuestion].options}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              setGameOver={setGameOver}
            />
          )}
        </div>
        <button onClick={handleClick} className="goBtn">
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Survey;
