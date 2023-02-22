import React from "react";
import Dmqq from "../assets/images/undrew/dmqq.png";
import E1nn from "../assets/images/undrew/e1nn.png";
import Fe15 from "../assets/images/undrew/fe15.png";
import Nky7 from "../assets/images/undrew/nky7.png";
import O5af from "../assets/images/undrew/o5af.png";
import yrrv from "../assets/images/undrew/yrrv.png";
import Title from "./utli/Title";

const Services = () => {
  return (
    <div className=" my-5 md:my-0 md:h-screen flex flex-col justify-center" id="services">
      <Title title="Services" subTitle="What can I do" />
      <div className="flex flex-col md:flex-row my-10 gap-5">
        <div className=" basis-1/3 shadow-sm border border-gray-200 rounded-lg py-3 px-2  flex flex-col justify-center items-center">
          <div className="">
            <img src={Dmqq} alt="" className=" h-36" />
          </div>
          <div className=" text-center mt-auto">
            <span className=" font-medium italic ">Web Design</span>
            <p className=" text-gray-500 text-sm my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            </p>
          </div>
        </div>

        <div className=" basis-1/3 shadow-sm border border-gray-200 rounded-lg py-3 px-2  flex flex-col justify-center items-center">
          <div>
            <img src={Nky7} alt="" className=" h-36" />
          </div>
          <div className=" text-center mt-auto">
            <span className=" font-medium italic">Responsive UI/UX</span>
            <p className=" text-gray-500 text-sm my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            </p>
          </div>
        </div>

        <div className=" basis-1/3 shadow-sm border border-gray-200 rounded-lg py-3 px-2  flex flex-col justify-center items-center">
          <div>
            <img src={yrrv} alt="" className=" h-36" />
          </div>
          <div className=" text-center mt-auto">
            <span className=" font-medium italic ">Web Application</span>
            <p className=" text-gray-500 text-sm my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
