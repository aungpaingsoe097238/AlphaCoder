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

const Gallery = () => {
  return (
    <div className=" my-5 md:h-screen md:flex md:flex-col md:justify-center " id="gallery">
      <Title title="Gallery" subTitle="My Memories" />
      <p className=" my-5 text-gray-500 text-sm">
        History is become a life of a part.
      </p>
      <div class="columns-1 md:columns-3 xl:columns-4 ">
        <img
          src={k1}
          className=" aspect-square gallery-img"
          alt=""
        />
        <img
          src={k2}
          className=" aspect-square gallery-img"
          alt=""
        />
        <img
          src={k16}
          className="aspect-square gallery-img"
          alt=""
        />
        <img
          src={k5}
          className=" aspect-square gallery-img"
          alt=""
        />
        <img
          src={k11}
          className=" aspect-square gallery-img"
          alt=""
        />
        <img
          src={k12}
          className=" aspect-square gallery-img"
          alt=""
        />
        <img
          src={k14}
          className=" aspect-square  gallery-img"
          alt=""
        />
        <img
          src={k15}
          className=" aspect-square gallery-img"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
