import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import LOGO2 from "./../assets/logo2.png";

const Description = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="screenHeight w-full bg-[#ffe9ff] border-[2px] ">
      <Header />
      <div className="relative w-full mainBox3 flex flex-col ">
        <div className="w-full flex  items-center justify-center pb-8">
          <img src={LOGO2} alt="logo" />
        </div>

        <div className="des_content ">
          <p>Welcome to the One in a Billion Personality Gamification!</p>
          <p>
            An interactive approach to learn from your day-to-day experiences
            and gain knowledgeable insights on a product or individual
            personality traits. Attributes that could be related to: Confidence,
            Versatility or Consistency.
          </p>
          <p>
            Participate in an interactive Q&A related to day-to-day experiences
            which will hardly take 10-20 minutes. Each question will have
            choices. Each choice unfolds more about the unique personality.
          </p>
          <p>Jump in, Let's start the hunt!</p>
        </div>

        <button onClick={handleClick} className="okBtn">
          GO
        </button>
      </div>
    </div>
  );
};

export default Description;
