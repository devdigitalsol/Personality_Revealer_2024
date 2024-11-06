import React, { useState } from "react";

const Reference = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div className="bg-gray-900/75 fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
          <div className="relative z-10 w-4/5">
            <div className="bg-white shadow rounded p-4 text-center flex items-center justify-center flex-col gap-3 font-semibold">
              <p>
                Widmark JM. Proc (Bayl Univ Med Cent) 2007; 20(4): 408-17
                Boijsen
              </p>
              <p>
                E, Aakhus T. Acta Radiol Suppl 1983; 366(Suppl.1): 7-8. Lamb JT.
              </p>
              Invest Radiol 1985; 20(Suppl.): S37-43. Rubin CME et al. Brit J
              Radiol 1987; 60(710): 133-5. Harding JR et al. Brit J Radiol 1995;
              68(811): 712-5. Katayama H et al. Invest Radiol 2001; 36(1):
              22-32. Faykus MH et al. Invest Radiol 1994; 29(Suppl.1): S98-101.
              Bischoff W. Fortschr Röntgenstr 1989; 128: 108-10. Drouillard J et
              al. Acta Radiol 1996; 37 (Suppl.400): 56–61. Legmann P et al. Eur
              Radiol 2001; 11(11): 2220-7. Kaufman AJ et al. Urol Radiol 1990;
              12(1): 56-60. Cutcliff WB et al. Invest Radiol 1989; 24(Suppl.1):
              S56-9. Bertrand P et al. Acad Radiol 1995; 2(8): 683-6. Krouwels
              MM et al. Eur J Radiol 1996; 22(2): 133-5. van Deven T et al. Eur
              J Radiol 2013; 82(5): 883-7. RANZCR. The role and value of the
              clinical radiologist, November 2014. Data on File,GE Healthcare,
              Omnipaque Demand_2022 Data on file – Contrast Media Demand and
              Investment; November 2023 Data on file – Increasing Production
              Capacity; July 2024 RCR. Clinical radiology UK workforce census,
              April 2021. Sugden D. Presented at UK North CT Radiographer
              Workshop. Leeds, March 2017. Marshall G. Radiography 2008; 14:
              128-34. Gricar J et al. Radiol Manage 2007; SEP/OCT: 34-42.
              Dhaliwal H et al. Int J Life Cycle Assess 2014; 19: 1965-73
              Morrison G, Odle T. Radiol Technol 2007; 79(1): 1-5. 
              <p></p>
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
