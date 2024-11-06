import Footer from "../components/Footer";
import LOGO from "./../assets/center_logo.png";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/questions");
  }, 2000);

  return (
    <div className="screenHeight w-full flex-col bg-[#ffe9ff] border-[2px]">
      <Header />
      <div className=" w-full flex items-center justify-center">
        <img src={LOGO} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Logo;
