import React, { useCallback, useContext, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { AppContext } from "../context/AppContext";

const PicModal = ({ show, setShow, setFormData }) => {
  const cropperRef = useRef();
  const fileRef = useRef();
  const types = ["image/png", "image/jpeg"];
  const [src, setSrc] = useState();
  const { setExtension } = useContext(AppContext);

  const selectImg = (e) => {
    let file = e.target.files[0];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    setExtension(fileExtension);
    if (file && types.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        setSrc(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select an image file (jpeg or jpg)");
    }
  };

  const cropImg = useCallback(() => {
    setFormData((prev) => {
      return {
        ...prev,
        photo: cropperRef.current.cropper.getCroppedCanvas().toDataURL(),
      };
    });
    setShow(false);
  }, [setShow, setFormData]);

  return (
    <>
      {show && (
        <div className="bg-gray-900/75 fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
          <div className="relative z-10" style={{ minWidth: "250px" }}>
            <div className="bg-white shadow rounded">
              <div className="p-4 text-center">
                <label className="btn overflow-hidden" htmlFor="browsePhoto">
                  Select photo
                  <input
                    type="file"
                    id="browsePhoto"
                    name="browsePhoto"
                    onChange={selectImg}
                    className="absolute -left-[-9999px] opacity-0"
                    ref={fileRef}
                  />
                </label>
              </div>
              <div className="card-body p-1">
                <div className="border-dashed border-2 border-theme-blue rounded w-[80%] pt-[80%] h-0 mx-auto overflow-hidden relative mb-3">
                  {!src && (
                    <div className="text-center  absolute top-0 left-0 w-full h-full flex items-center justify-center text-theme-blue">
                      <div className="upload-msg">
                        Photo preview
                        <br />
                        will appear here
                      </div>
                    </div>
                  )}
                  {src && (
                    <>
                      <div className="text-center  absolute top-0 left-0 w-full h-full flex items-center justify-center text-theme-blue">
                        <Cropper
                          ref={cropperRef}
                          autoCropArea={1}
                          src={src}
                          style={{ height: 200, width: 200 }}
                          guides={false}
                          aspectRatio={1 / 1}
                          type={"square"}
                          crossOrigin={"true"}
                          // enableOrientation={true}
                          // enableExif={true}
                          viewMode={3}
                          cropBoxMovable={false}
                          cropBoxResizable={false}
                          dragMode={"move"}
                        />
                      </div>
                    </>
                  )}
                </div>
                {src && (
                  <>
                    <div className="space-x-4 text-center mb-3">
                      <button
                        className="btn"
                        onClick={() => cropperRef.current.cropper.rotate(90)}
                      >
                        Rotate
                      </button>
                      <button onClick={cropImg} type="button" className="btn">
                        Use Photo
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="closeOverlay" onClick={() => setShow(false)}></div>
        </div>
      )}
    </>
  );
};

export default PicModal;
