import { useState } from "react";

const Options = ({
  options,
  setConfidence,
  setVersatility,
  setConsistency,
  setNextQuestion,
  setIsSelected,
  isSelected,
}) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  if (!Array.isArray(options)) {
    console.error("Options prop is not an array:", options);
    return null;
  }

  const handleClick = (e, index) => {
    setNextQuestion(true);
    setIsSelected(true);
    setSelectedOptionIndex(index);
    const personality = e.target.getAttribute("data-personality");

    switch (personality) {
      case "Confidence":
        setConfidence((prev) => prev + 1);
        break;
      case "Versatility":
        setVersatility((prev) => prev + 1);
        break;
      case "Consistency":
        setConsistency((prev) => prev + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 px-0">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={(e) => handleClick(e, index)}
          disabled={isSelected}
          className={`ansBtn ${
            selectedOptionIndex === index ? "selected" : ""
          }`}
          data-personality={option.personality}
        >
          <span className="px-4">{option.data}</span>
        </button>
      ))}
    </div>
  );
};

export default Options;
