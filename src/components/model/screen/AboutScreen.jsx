import React from "react";
import suya from "../../../assets/images/kznm/suya.jpg";
import photo from "../../../assets/images/kznm/photo.jpg";

const AboutScreen = () => {
  return (
    <div className=" overflow-y-auto h-full">
      <div className="flex ">
        <div className=" basis-1/3">
          <div className=" about-img"></div>
        </div>
        <div className=" basis-2/3">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            sapiente impedit? Nostrum tempore officiis eum deleniti maxime
            consequatur, quia distinctio soluta exercitationem sed commodi vitae
            natus numquam cumque corrupti tempora.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
