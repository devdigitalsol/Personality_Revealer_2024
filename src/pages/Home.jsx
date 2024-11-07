import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import LOGO from "./../assets/logo2.png";
import PicModal from "./../components/PicModal";
import Header from "./../components/Header";
import { AppContext } from "../context/AppContext";
import Footer from "../components/Footer";
import TermsModel from "../components/TermsModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { employees } from "../data/geEmployeeName";

const Home = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);
  const [showTerms, setShowTerms] = useState(false);
  const [term, setTerm] = useState(false);
  const [show, setShow] = useState(false);

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
        image: "",
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
        console.log(response);
        toast.success("Form submitted successfully");
        navigate("/survey");
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
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
                  {/* <select
                    type="text"
                    id="gehc"
                    className="focus:outline-none uppercase  w-full leading-6 text-[#662d91] placeholder-[#662d91] border-[#662d91] text-sm py-2 px-3 border-b-2 text-center  shadow-sm;"
                    value={formData.gehc}
                    onChange={(e) =>
                      setFormData({ ...formData, gehc: e.target.value })
                    }
                  >
                    <option disabled="" value="">
                      GEHC EMPLOYEE NAME
                    </option>
                    {employees.map((employee) => {
                      return (
                        <option key={employee.id} value={employee.id}>
                          {employee.name}
                        </option>
                      );
                    })}
                  </select> */}
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
