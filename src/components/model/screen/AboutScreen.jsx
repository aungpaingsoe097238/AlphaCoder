import React from "react";
import suya from "../../../assets/images/kznm/suya.jpg";
import photo from "../../../assets/images/kznm/photo.jpg";

const AboutScreen = () => {
  return (
    <div className="my-3 mx-10">
      <div>
        <div>
          
        </div>
        <div>
          <img
            src={photo}
            className=" h-[300px] object-cover rounded-sm shadow-sm "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
