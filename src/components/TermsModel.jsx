import React from "react";

const TermsModel = ({ showTerms, setShowTerms }) => {
  return (
    <>
      {showTerms && (
        <div className="bg-gray-900/75 fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
          <div className="relative z-10 w-4/5">
            <div className="bg-white shadow rounded p-4 text-center flex items-center justify-center flex-col gap-3">
              <h4 className="text-lg text-slate-800 font-bold">
                Terms & Conditions
              </h4>
              <p>
                I have opted to use the{" "}
                <span className="uppercase">Personality revealer</span>{" "}
                activity web link of my own volition and agree to upload my
                picture and personal details therein for participating in{" "}
                <span className="uppercase">Personality revealer</span>{" "}
                activity. I state that the picture and personal details shared
                by me are true and accurate and the Company shall not have any
                liability arising from its reliance on the same. I understand
                that no data will be retained by the Company post the event. I
                agree that the all contents used for promotion of the event
                shall be the property of GE HEALTHCARE, and meant for its use
                only.
              </p>
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
