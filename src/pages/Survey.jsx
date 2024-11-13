import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import shuffle from "../components/Shuffle";
import questionsData from "./../data/featureData";
import DRLLOGO from "./../assets/Bottom_Logo.png";
import Reference from "../components/Reference";
import ICON from "./../assets/book.png";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Survey = () => {
  const navigate = useNavigate();
  const { user, setAns, lastId } = useContext(AppContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedTopicsData, setSelectedTopicsData] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleOptionSelect = (index) => {
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter((i) => i !== index));
      setSelectedTopicsData(
        selectedTopicsData.filter((data, i) => i !== index)
      );
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, index]);
      setSelectedTopicsData([
        ...selectedTopicsData,
        questions[currentQuestion].options[index].topic,
      ]);
    }
  };

  const handleClick = () => {
    if (selectedOptions.length === 3) {
      const payload = {
        account: "Personality_Revealer",
        project_id: "GE_HealthCare",
        collection: "user_data_new",
        record: {
          selected_feature1: selectedTopicsData[0],
          selected_feature2: selectedTopicsData[1],
          selected_feature3: selectedTopicsData[2],
        },
        where: {
          id: lastId,
        },
      };
      axios
        .patch("https://backend.solmc.in/records", payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb2xtYyIsIm5hbWUiOiJzb2xtYyIsImV4cCI6IjE3MzkzNjE2MzIifQ.0Si6IXOrBQTXx4XzPoKgqydS6Ac6DcU1PyCcHFcvD6E`,
          },
        })
        .then((response) => {
          console.log("Data successfully updated:", response.data);
          navigate("/logo");
        })
        .catch((error) => console.error("Error updating record:", error));
    }
  };

  return (
    <>
      <div className="screenHeight w-full flex-col bg-[#662d91] border-[2px]">
        <Header />
        <div className="px-2 relative w-full mainBox2">
          <div
            className=" flex flex-col gap-6 pt-6 items-center justify-center"
            style={{ height: "90%", paddingBottom: "30px" }}
          >
            {questions.length > 0 && !gameOver && (
              <div className="text-center font-medium text-[#662d91] text-xl px-4 leading-6">
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
                    <span className="">
                      <span className="font-bold text-[#000000] block pb-0.5 leading-4">
                        {option.topic}
                      </span>

                      <span
                        className="text-[#000000] leading-4"
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

        <div className="flex justify-end  cursor-pointer text-sm text-red  w-full pop_sec_top">
          <span onClick={() => setShowPopup(true)}>
            {" "}
            <img src={ICON} alt="logo" />
          </span>
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
      <Reference showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
};

export default Survey;
