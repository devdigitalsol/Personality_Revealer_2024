import React, { useState } from "react";

const TermsModel = ({ showTerms, setShowTerms }) => {
  const [term, setTerm] = useState(false);

  const handleCheckboxChange = (event) => {
    setTerm(event.target.checked);
  };

  return (
    <>
      {showTerms && (
        <div className="bg-gray-900/75 fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
          <div className="relative z-10 w-4/5">
            <div className="bg-white shadow rounded p-4 text-center flex items-center justify-center flex-col gap-3 font-semibold">
              <p className="text-[15px]">
                I have opted to use the{" "}
                <span className="uppercase">
                  one in a billion personality revealer
                </span>{" "}
                web link of my own will and agree to upload my picture and
                personal details therein for participating in{" "}
                <span className="uppercase">
                  one in a billion Personality revealer
                </span>{" "}
                activity.
                <br />
                <br />
                <span>
                  I state that the picture and personal details shared by me are
                  true and accurate and the company shall not have any liability
                  arising from its reliance on the same. I understand that no
                  data will be retained by the company post the event. I agree
                  that the all contents used for promotion of the event shall be
                  the property of GE HealthCare, and meant for its use only.
                </span>
              </p>

              <div className="flex gap-3 mt-[8px] mb-4 checkboxContainer ">
                {/* <label htmlFor="termCheckBox" className="customCheckbox ">
                  <input
                    type="checkbox"
                    id="termCheckBox"
                    defaultChecked={term}
                    onChange={() => setTerm(!term)}
                  />
                  <i></i>
                </label> */}
                <p className="leading-4 text-[13px]">
                  I understand and hereby agree to GE HealthCare privacy policy.{" "}
                </p>
              </div>

              <button
                type="button"
                className="btn w-full"
                onClick={() => setShowTerms(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsModel;
