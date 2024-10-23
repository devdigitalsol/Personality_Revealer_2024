import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import LOGO2 from "./../assets/logo2.png";

const Description = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/questions");
  };

  return (
    <div className="screenHeight w-full bg-[#ffe9ff] border-[2px] ">
      <Header />
      <div className="relative w-full mainBox3 flex flex-col ">
      <div className="w-full flex  items-center justify-center pb-8">
              <img src={LOGO2} alt="logo" />
            </div>

        <div className="des_content overflow-scroll">
        <p>
        An individual's, personality encompasses a collection of traits that constructs a particular set of behavior or ways of thinking which may resonate with their conduct in the society and work culture.

        </p>
        <p>
        This personality gamification is an interactive effort to reveal your unique professional personality, which could be from the following types : Confident, Versatile or Consistent; mirroring Omnipaque hallmarks. Omnipaque has been your trusted LOCM keeping radiology moving: Omnipaque’s established position as the WORKHORSE for BUSY RADIOLOGY departments, delivering Confident, Versatile, Consistent,  Quality, Reliability, Heritage, and Expertise are synonymous with Omnipaque. This has resulted in Omnipaque's success in delivering One billion+  doses of Omnipaque being used in over 1 billion procedures to date.
        </p>

       
              </div>   

              <button onClick={handleClick} className="okBtn">
          GO
        </button>
       

        
      </div>
    </div>
  );
};

export default Description;
