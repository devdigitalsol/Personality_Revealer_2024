import { useState, useContext, useEffect } from "react";
// import axios from "axios";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import CONFIDENT from "./../assets/img1.png";
import CONSISTENCY from "./../assets/img2.png";
import VERSATILITY from "./../assets/img3.png";
import html2canvas from "html2canvas";
import Loader from "../components/Loader";
import circle from "../assets/circle2.png";

const Poster = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, ans } = useContext(AppContext);

  // const downLoadPoster = () => {
  //   setLoading(true);
  //   window.scrollTo(0, 0);
  //   html2canvas(document.getElementById("templateView"), {
  //     allowTaint: true,
  //     useCORS: true,
  //     logging: true,
  //     scrollX: 0,
  //     scrollY: -window.scrollY,
  //     onrendered: function (canvas) {
  //       document.body.appendChild(canvas);
  //       window.scrollTo(0, 0);
  //     },
  //   })
  //     .then(async (canvas) => {
  //       var myImage = canvas.toDataURL("image/jpeg", 0.9);
  //       const jsonData = {
  //         empId: user.empId,
  //         drName: user.drName,
  //         poster: myImage,
  //       };
  //       try {
  //         const response = await axios.post(
  //           "https://www.omezfirstpersonalityrevealer.in/add-user.php",
  //           JSON.stringify(jsonData)
  //         );
  //         const link = document.createElement("a");
  //         link.href = `https://www.omezfirstpersonalityrevealer.in/${response.data.path}`;
  //         link.target = "_blank";
  //         link.setAttribute("download", "image.jpeg");
  //         document.body.appendChild(link);
  //         link.click();
  //         setLoading(false);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })
  //     .catch(function (error) {
  //       setLoading(false);
  //       console.log(error);
  //       alert("oops, something went wrong!", error);
  //     });
  // };

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
        setLoading(false);
        alert("oops, something went wrong!", error);
      });
  };

  const backBtn = () => {
    navigate("/");
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
            <>
              <img src={CONFIDENT} alt="" />{" "}
              <div className="img_sec">
                <img src={circle} alt="" className="circle" />{" "}
                {user?.photo && (
                  <img
                    src={user.photo}
                    alt="userphoto"
                    className="user_photo"
                  />
                )}{" "}
              </div>
              <h5> {user?.drName}</h5>
            </>
          )}

          {ans === "consistency" && (
            <>
              <img src={CONSISTENCY} alt="" />
              <div className="img_sec">
                {" "}
                <img src={circle} alt="" className="circle" />{" "}
                {user?.photo && (
                  <img
                    src={user.photo}
                    alt="userphoto"
                    className="user_photo"
                  />
                )}{" "}
              </div>
              <h5>{user?.drName}</h5>
            </>
          )}

          {ans === "versatility" && (
            <>
              <img src={VERSATILITY} alt="" />
              <div className="img_sec">
                {" "}
                <img src={circle} alt="" className="circle" />{" "}
                {user?.photo && (
                  <img
                    src={user.photo}
                    alt="userphoto"
                    className="user_photo"
                  />
                )}{" "}
              </div>{" "}
              <h5> {user?.drName}</h5>
            </>
          )}
        </div>
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
