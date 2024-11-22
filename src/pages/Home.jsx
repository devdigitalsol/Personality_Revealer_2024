import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import LOGO from "./../assets/logo2.png";
import PicModal from "./../components/PicModal";
import Header from "./../components/Header";
import { AppContext } from "../context/AppContext";
import Footer from "../components/Footer";
import TermsModel from "../components/TermsModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const { setUser, setLastId } = useContext(AppContext);
  const [showTerms, setShowTerms] = useState(false);
  const [term, setTerm] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    gehc: "",
    drName: "",
    photo: "",
    location: "",
    designation: "",
    city: "",
    termCheckBox: "",
  });

  const openTerms = () => {
    setShowTerms(true);
  };

  const compressImage = (file, maxWidth = 800, maxHeight = 800) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = () => {
        img.src = reader.result;
      };
      reader.onerror = reject;

      reader.readAsDataURL(file);

      img.onload = () => {
        const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
        const width = img.width * ratio;
        const height = img.height * ratio;

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);

        resolve(compressedBase64);
      };
    });
  };

  const uploadFile = async (imageSrc) => {
    let formData = new FormData();
    const blob = await fetch(imageSrc).then((res) => res.blob());

    console.log(blob, "without compressed");

    const compressedImg = await compressImage(blob);

    const blobNew = await fetch(compressedImg).then((res) => res.blob());

    console.log(blobNew, "Compressed image");

    formData.append("account", "Personality_Revealer");
    formData.append("collection", "user_data_new");
    formData.append("project_id", "GE_HealthCare");
    formData.append("upload_file", blobNew);

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "content-type": "multipart/form-data",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb2xtYyIsIm5hbWUiOiJzb2xtYyIsImV4cCI6IjE3MzkzNjE2MzIifQ.0Si6IXOrBQTXx4XzPoKgqydS6Ac6DcU1PyCcHFcvD6E`,
    };

    try {
      const resp = await axios.post(
        `https://backend.solmc.in/file_upload`,
        formData,
        {
          headers,
        }
      );

      if (resp.data.status == 200) {
        const result = resp?.data?.filename;
        setLoading(false);
        return result;
      }
    } catch (error) {
      setLoading(false);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { gehc, drName, photo, location, designation, city } = formData;
    if (
      !gehc.trim() ||
      !drName.trim() ||
      !location.trim() ||
      !designation.trim() ||
      !city.trim()
    ) {
      return toast.error("Please fill all the fields");
    }
    if (!photo) {
      return toast.error("Please select doctor's photo");
    }

    setLoading(true);

    const uploadedImageUrl = await uploadFile(photo);
    console.log(uploadedImageUrl);
    if (!uploadedImageUrl) {
      setLoading(false);
      return;
    }

    const requestBody = {
      account: "Personality_Revealer",
      project_id: "GE_HealthCare",
      collection: "user_data_new",
      record: {
        gehc_employee_name: gehc,
        particiapant_name: drName,
        institute_name: location,
        Designation: designation,
        city: city,
        image: uploadedImageUrl,
        personality: "",
        selected_feature1: "",
        selected_feature2: "",
        selected_feature3: "",
        certificate: "",
      },
    };

    try {
      const response = await fetch("https://backend.solmc.in/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb2xtYyIsIm5hbWUiOiJzb2xtYyIsImV4cCI6IjE3MzkzNjE2MzIifQ.0Si6IXOrBQTXx4XzPoKgqydS6Ac6DcU1PyCcHFcvD6E`,
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        const result = await response.json();
        setUser(formData);
        setLastId(result.last_id);
        toast.success("Form submitted successfully");
        navigate("/survey");
      } else {
        toast.error("Failed to submit form. Please try again.", response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="screenHeight w-full bg-[#ffe9ff] border-[2px]">
        <Header />
        <div className="px-4 relative  w-full mainBox">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-6 py-6 justify-around"
          >
            <div className="w-full flex  items-center justify-center">
              <img src={LOGO} alt="logo" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-white p-4 rounded">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="GEHC EMPLOYEE NAME"
                    className="form-control text-center uppercase"
                    id="gehc"
                    value={formData.gehc}
                    onChange={(e) =>
                      setFormData({ ...formData, gehc: e.target.value })
                    }
                  />
                </div>

                <div className="form-group  ">
                  <input
                    type="text"
                    placeholder="PARTICIPANT NAME"
                    className="form-control text-center uppercase"
                    id="drName"
                    value={formData.drName}
                    onChange={(e) =>
                      setFormData({ ...formData, drName: e.target.value })
                    }
                  />
                </div>

                <div className="form-group  ">
                  <input
                    type="text"
                    placeholder="INSTITUTE NAME"
                    className="form-control text-center uppercase"
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>

                <div className="form-group ">
                  <input
                    type="text"
                    placeholder="DESIGNATION"
                    className="form-control text-center uppercase"
                    id="designation"
                    value={formData.designation}
                    onChange={(e) =>
                      setFormData({ ...formData, designation: e.target.value })
                    }
                  />
                </div>

                <div className="form-group pb-4 ">
                  <input
                    type="text"
                    placeholder="CITY"
                    className="form-control text-center uppercase"
                    id="city"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <button
                    type="button"
                    className="btn w-full uppercase"
                    onClick={() => setShow(true)}
                  >
                    Browse photo
                  </button>
                </div>
              </div>
              <div className="flex px-4 gap-3 mt-[-8px] mb-6 checkboxContainer">
                <label htmlFor="termCheckBox" className="customCheckbox ">
                  <input
                    type="checkbox"
                    id="termCheckBox"
                    defaultChecked={term}
                    onChange={() => setTerm(!term)}
                  />
                  <i></i>
                </label>
                <p className="leading-4">
                  I have read and agree to{" "}
                  <span
                    onClick={openTerms}
                    className=" font-bold text-[#662d91]"
                  >
                    terms & conditions
                  </span>
                </p>
              </div>
            </div>

            {loading ? (
              <p className="text-center font-bold">Please Wait...</p>
            ) : (
              <button
                type="submit"
                className="goBtn"
                disabled={
                  !formData.drName ||
                  !formData.gehc ||
                  !formData.photo ||
                  !formData.location ||
                  !term
                }
              >
                GO
              </button>
            )}
          </form>
        </div>
        <Footer />
      </div>
      <PicModal show={show} setShow={setShow} setFormData={setFormData} />
      <TermsModel showTerms={showTerms} setShowTerms={setShowTerms} />
      <ToastContainer />
    </>
  );
};

export default Home;
