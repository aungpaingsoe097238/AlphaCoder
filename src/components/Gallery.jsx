import React from "react";
import Title from "./utli/Title";
import k1 from "../assets/images/kznm/k1.jpg";
import k2 from "../assets/images/kznm/k2.jpg";
import k3 from "../assets/images/kznm/k3.jpg";
import k4 from "../assets/images/kznm/k4.jpg";
import k5 from "../assets/images/kznm/k5.jpg";
import k6 from "../assets/images/kznm/k6.jpg";
import k7 from "../assets/images/kznm/k7.jpg";
import k8 from "../assets/images/kznm/k8.jpg";
import k9 from "../assets/images/kznm/k9.jpg";
import k10 from "../assets/images/kznm/k10.jpg";
import k11 from "../assets/images/kznm/k11.jpg";
import k12 from "../assets/images/kznm/k12.jpg";
import k13 from "../assets/images/kznm/k13.jpg";
import k14 from "../assets/images/kznm/k14.jpg";
import k15 from "../assets/images/kznm/k15.jpg";
import k16 from "../assets/images/kznm/k16.jpg";
import k17 from "../assets/images/kznm/k17.jpg";
import k18 from "../assets/images/kznm/k18.jpg";
import k19 from "../assets/images/kznm/k19.jpg";
import k20 from "../assets/images/kznm/k20.jpg";

const Gallery = () => {
  return (
    <div className=" my-5" id="gallery">
      <Title title="Gallery" subTitle="My Memories" />
      <p className=" my-5 text-gray-500 text-sm">
        History is become a life of a part.
      </p>
      <div class="columns-1 lg:columns-3 max-xl:columns-4 ">
        <img
          src={k1}
          className=" aspect-video cursor-zoom-in w-full object-cover mb-5 rounded-lg"
          alt=""
        />
        <img
          src={k2}
          className=" aspect-video cursor-zoom-in w-full object-cover mb-5 rounded-lg"
          alt=""
        />
        <img
          src={k16}
          className="aspect-square cursor-zoom-in w-full object-cover mb-5 rounded-lg"
          alt=""
        />
        <img
          src={k5}
          className=" aspect-square cursor-zoom-in w-full object-cover mb-5 rounded-lg"
          alt=""
        />
        <img
          src={k11}
          className=" aspect-square cursor-zoom-in w-full object-cover mb-5 rounded-lg"
          alt=""
        />
        <img
          src={k12}
          className=" aspect-square cursor-zoom-in w-full object-cover mb-5 rounded-lg"
          alt=""
        />
        <img
          src={k14}
          className=" aspect-video cursor-zoom-in w-full object-cover mb-5 rounded-lg"
          alt=""
        />
        <img
          src={k15}
          className=" aspect-video cursor-zoom-in w-full object-cover mb-5 rounded-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
