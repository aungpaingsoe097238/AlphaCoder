import React from "react";
import { useSelector } from "react-redux";

const GalleryScreen = () => {
  const image = useSelector((state) => state?.model?.image);

  console.log(image);

  return (
    <div className=" w-full overflow-y-auto h-full bg-transparent">
      <img src={image} className=" max-h-full mx-auto " alt="" />
    </div>
  );
};

export default GalleryScreen;
