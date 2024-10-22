import React,{useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"
import axios from "axios";
import {AppContext} from "../context/AppContext"
import DRLLOGO from "./../assets/drl_logo.png"
import CONFIDENT from "./../assets/img1.png"
import RELIABLE from "./../assets/img2.png"
import CONSISTENCY from "./../assets/img3.png"
import html2canvas from "html2canvas";
import Loader from "../components/Loader";
import circle from "../assets/circle2.png";

const Poster = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, ans } = useContext(AppContext);
  

  const downLoadPoster = () => {
    setLoading(true);
    window.scrollTo(0, 0);
    // htmlToImage
    //   .toJpeg(node, { quality: 0.95 })
    //   .then(function (dataUrl) {
    //     const link = document.createElement("a");
    //     link.href = dataUrl;
    //     link.target = "_blank";
    //     link.setAttribute("download", "image.jpeg");
    //     document.body.appendChild(link);
    //     link.click();
    //     setLoading(false);
    //   })
    //   .catch(function (error) {
    //     setLoading(false);
    //     console.log(error);
    //     alert("oops, something went wrong!", error);
    //   });
    html2canvas(document.getElementById("templateView"), {
      allowTaint: true,
      useCORS: true,
      logging: true,
      scrollX: 0,
      scrollY: -window.scrollY,
      onrendered: function (canvas) {
        document.body.appendChild(canvas);
        window.scrollTo(0, 0);
      },
    })
      .then(async (canvas) => {
        var myImage = canvas.toDataURL("image/jpeg", 0.9);
        // setViewImg(myImage);
        const jsonData = {
          empId: user.empId,
          drName: user.drName,
          poster: myImage,
        };
        try {
          const response = await axios.post(
            "https://www.omezfirstpersonalityrevealer.in/add-user.php",
            JSON.stringify(jsonData)
          );
          const link = document.createElement("a");
          link.href = `https://www.omezfirstpersonalityrevealer.in/${response.data.path}`;
          link.target = "_blank";
          link.setAttribute("download", "image.jpeg");
          document.body.appendChild(link);
          link.click();
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
        alert("oops, something went wrong!", error);
      });
  };


  const downloadImage = () => {
    // setIsLoading(true);
    window.scrollTo(0, 0);
    html2canvas(document.getElementById("templateView"), {
      allowTaint: true,
      useCORS: true,
      logging: true,
      scrollX: 0,
      scrollY: -window.scrollY,
      onrendered: function (canvas) {
        document.body.appendChild(canvas);
        window.scrollTo(0, 0);
      },
    })
      .then((canvas) => {
        var myImage = canvas.toDataURL("image/jpeg", 0.8);
        // uploadData(myImage);
        const link = document.createElement("a");
        link.href = myImage;
        link.target = "_blank";
        link.setAttribute("download", "image.jpeg");
        document.body.appendChild(link);
        link.click();
        // setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        // setIsLoading(false);
        alert("oops, something went wrong!", error);
      });
  };

  const backBtn = () => {
    navigate("/")
    window.location.reload();
  };
  useEffect(() => {
    if (!user?.drName) {
      navigate("/");
    }
  }, [navigate, user?.drName]);

  return (
    <>
      {loading && <Loader />}
      <div className="screenHeight w-full">
        <div className="px-6 py-6 relative w-full mainBox2" id="templateView">
            {ans === "confidence" && (
              <><img src={CONFIDENT} alt="" /> <div className="img_sec"><img src={circle} alt="" className="circle"/> {user?.photo && <img src={user.photo} alt="userphoto" className="user_photo"/>} </div><h4>DR. {user?.drName}</h4></>
            )}
            {ans === "reliability" && (
              <><img src={RELIABLE} alt="" /><div className="img_sec"> <img src={circle} alt="" className="circle"/> {user?.photo && <img src={user.photo} alt="userphoto" className="user_photo"/>} </div> <h4>DR. {user?.drName}</h4></>
            )}
            {ans === "consistency" && (
              <><img src={CONSISTENCY} alt="" /><div className="img_sec"> <img src={circle} alt="" className="circle"/> {user?.photo && <img src={user.photo} alt="userphoto" className="user_photo"/>} </div><h4>DR. {user?.drName}</h4></>
            )}
        </div>
        
        {/* <Header />
        <div className="px-6 relative w-full mainBox2">
          <div
            className="borderCustom flex flex-col gap-6 justify-around p-4 !pb-4 !rounded-none"
            id="templateView"
          >
            <div className="bg-white p-4 flex flex-col items-center gap-4 shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="w-44 h-44 rounded-full overflow-hidden border-[#662d91] border-2 flex items-center justify-center mb-2">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-[#662d91] border-4">
                    {user?.photo && <img src={user.photo} alt="userphoto" />}
                  </div>
                </div>
                <div className="uppercase text-[#662d91] text-[24px] font-extrabold">
                  DR. {user?.drName}
                </div>
              </div>
              {ans === "confidence" && (
                <div className="w-full text-center">
                  <div className="flex items-center w-full justify-center  mt-[-10px] ">
                    <img src={CONFIDENT} alt="poster" />
                  </div>
                  <p className="leading-5 mt-1">
                       Your assertive approach and sharp
                       decision-making shine through, 
                       guiding teams with clarity and 
                       elevating patient outcomes.
                  </p>
                </div>
              )}
              {ans === "reliability" && (
                <div className="w-full text-center">
                  <div className="flex items-center w-full justify-center mt-[-10px]">
                    <img src={RELIABLE} alt="poster" />
                  </div>
                  <p className="leading-5 mt-1">
                       Your unwavering consistency ensures
                       that no image goes unread and
                       no detail is overlooked, forming 
                       the backbone of patient care.
                  </p>
                </div>
              )}
              {ans === "consistency" && (
                <div className="w-full text-center">
                  <div className="flex items-center w-full justify-center mt-[-10px] ">
                    <img src={EXPERT} alt="poster" />
                  </div>
                  <p className="leading-5 mt-1">
                      Your unwavering precision and 
                      methodical approach ensure
                      consistent, reliable results
                      every time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div> */}
      </div>
      <div className="fixed bg-black/40 w-full left-0 right-0 bottom-0 p-4 text-center flex gap-3 items-start justify-center">
        <button type="button" onClick={backBtn} className="backBtn">
          Back
        </button>
        <button type="button" onClick={downloadImage} className="downloadBtn">
          download
        </button>
      </div>
    </>
  );
};

export default Poster;