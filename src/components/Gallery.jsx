import React from "react";
import Title from "./utli/Title";
import k1 from "../assets/images/kznm/k1.jpg";
import k2 from "../assets/images/kznm/k2.jpg";
import k5 from "../assets/images/kznm/k5.jpg";
import k11 from "../assets/images/kznm/k11.jpg";
import k12 from "../assets/images/kznm/k12.jpg";
import k14 from "../assets/images/kznm/k14.jpg";
import k15 from "../assets/images/kznm/k15.jpg";
import k16 from "../assets/images/kznm/k16.jpg";
import { useDispatch } from "react-redux";
import { addState } from "../features/services/modelSlice";

const Gallery = () => {
  let images = [
    { url: k1 },
    { url: k2 },
    { url: k5 },
    { url: k11 },
    { url: k12 },
    { url: k14 },
    { url: k15 },
    { url: k16 },
  ];

  const dispatch = useDispatch();
  const handleOpengalleryModel = (url) => {
    dispatch(addState({ screen: "gallery", image : url }));
  };

  return (
    <div
      className=" my-5 md:h-screen md:flex md:flex-col md:justify-center "
      id="gallery"
    >
      <Title title="Gallery" subTitle="My Memories" />
      <p className=" my-5 text-gray-500 text-sm">
        History is become a life of a part.
      </p>
      <div class="columns-1 md:columns-3 xl:columns-4 ">
        {images?.map((image) => (
          <img
            src={image.url}
            className="aspect-square gallery-img"
            alt=""
            onClick={() => handleOpengalleryModel(image.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
