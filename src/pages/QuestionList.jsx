import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Options from "../components/Options";
import { AppContext } from "../context/AppContext";
import questionsData from "./../data/data";

const QuestionList = () => {
  const navigate = useNavigate();
  const { user, setAns } = useContext(AppContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const [confidence, setConfidence] = useState(0);
  const [versatility, setVersatility] = useState(0);
  const [consistency, setConsistency] = useState(0);

  useEffect(() => {
    if (!user?.drName) {
      navigate("/");
    }
  }, [navigate, user?.drName]);

  useEffect(() => {
    setQuestions(questionsData);
    setTotalQuestions(questionsData.length);
  }, []);

  const checkResult = useCallback(() => {
    const personalities = { confidence, versatility, consistency };
    const maxValue = Math.max(...Object.values(personalities));
    const topPersonalities = Object.keys(personalities).filter(
      (key) => personalities[key] === maxValue
    );

    let finalPersonality;
    if (topPersonalities.length === 1) {
      finalPersonality = topPersonalities[0];
    } else {
      finalPersonality =
        topPersonalities[Math.floor(Math.random() * topPersonalities.length)];
    }
    setAns(finalPersonality);

    navigate("/poster");
  }, [confidence, versatility, consistency, navigate, setAns]);

  const gotoNext = useCallback(() => {
    const nextqt = currentQuestion + 1;
    if (nextqt < questions.length) {
      setCurrentQuestion(nextqt);
      setIsSelected(false);
      setNextQuestion(false);
    } else {
      setGameOver(true);
      checkResult();
    }
    document.querySelectorAll(".selected").forEach((btn) => {
      btn.classList.remove("selected");
    });
  }, [checkResult, currentQuestion, questions.length]);

  useEffect(() => {
    if (nextQuestion) {
      setTimeout(() => {
        gotoNext();
      }, 1000);
    }
  }, [nextQuestion, gotoNext]);

  return (
    <div className="screenHeight w-full bg-[#ffe9ff] border-[2px]">
      <Header />
      <div className="px-6 relative w-full mainBox2 mt-10 ">
        <div
          className="borderCustom flex flex-col gap-6 pt-12 items-center justify-center"
          style={{ height: "90%" }}
        >
          <div className="scoreBoard flex items-center justify-center mb-auto mt-0">
            <div className="w-20 h-8 text-center text-[#662d91] font-bold text-xl">
              {`${currentQuestion + 1} / ${totalQuestions}`}
            </div>
          </div>
          {questions.length > 0 && !gameOver && (
            <div className="text-center font-bold text-[#6400A0] text-2xl px-4 py-8  leading-6">
              {questions[currentQuestion].question}
            </div>
          )}
          {questions.length > 0 && (
            <Options
              options={questions[currentQuestion].options}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              setGameOver={setGameOver}
              setNextQuestion={setNextQuestion}
              setConfidence={setConfidence}
              setVersatility={setVersatility}
              setConsistency={setConsistency}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
