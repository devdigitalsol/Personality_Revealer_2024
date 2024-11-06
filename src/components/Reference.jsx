import React, { useState } from "react";


const Reference = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div className="bg-gray-900/75 fixed top-0 left-0 w-full h-full z-10 main_popup">
          <div className="relative z-10 w-5/5">
            <div className="bg-white shadow  p-4 font-semibold">
             <ul className="pop_content">
              <h4>References</h4>
              <li>Widmark JM. Proc (Bayl Univ Med Cent) 2007; 20(4): 408-17</li>
              <li>Boijsen E, Aakhus T. Acta Radiol Suppl 1983; 366(Suppl.1): 7-8.</li>
              <li>Lamb JT. Invest Radiol 1985; 20(Suppl.): S37-43.</li>
              <li>Rubin CME et al. Brit J Radiol 1987; 60(710): 133-5.</li>
              <li>Harding JR et al. Brit J Radiol 1995; 68(811): 712-5.</li>
              <li>Katayama H et al. Invest Radiol 2001; 36(1): 22-32.</li>
              <li>Faykus MH et al. Invest Radiol 1994; 29(Suppl.1): S98-101.</li>
              <li>Bischoff W. Fortschr Röntgenstr 1989; 128: 108-10.</li>
              <li>Drouillard J et al. Acta Radiol 1996; 37 (Suppl.400): 56–61.</li>
              <li>Legmann P et al. Eur Radiol 2001; 11(11): 2220-7.</li>
              <li>Kaufman AJ et al. Urol Radiol 1990; 12(1): 56-60.</li>
              <li>Cutcliff WB et al. Invest Radiol 1989; 24(Suppl.1): S56-9.</li>
              <li>Bertrand P et al. Acad Radiol 1995; 2(8): 683-6.</li>
              <li>Krouwels MM et al. Eur J Radiol 1996; 22(2): 133-5.</li>
              <li>van Deven T et al. Eur J Radiol 2013; 82(5): 883-7.</li>
              <li>RANZCR. The role and value of the clinical radiologist, November 2014.</li>
              <li>Data on File,GE Healthcare, Omnipaque Demand_2022</li>
              <li>Data on file – Contrast Media Demand and Investment; November 2023</li>
              <li>Data on file – Increasing Production Capacity; July 2024</li>
              <li>RCR. Clinical radiology UK workforce census, April 2021.</li>
              <li>Sugden D. Presented at UK North CT Radiographer Workshop. Leeds, March 2017.</li>
              <li>Marshall G. Radiography 2008; 14: 128-34.</li>
              <li>Gricar J et al. Radiol Manage 2007; SEP/OCT: 34-42. </li>
              <li>Dhaliwal H et al. Int J Life Cycle Assess 2014; 19: 1965-73</li>
              <li>Morrison G, Odle T. Radiol Technol 2007; 79(1): 1-5. </li>
             </ul>
              <button
                type="button"
                className="btn w-full"
                onClick={() => setShowPopup(false)}
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

export default Reference;
