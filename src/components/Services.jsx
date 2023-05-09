import React, { useState } from "react";
import Undraw3 from "../assets/images/undrew/undraw3.png";
import Undraw4 from "../assets/images/undrew/undraw4.png";
import Undraw1 from "../assets/images/undrew/undraw1.png";
import Title from "./utli/Title";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur",
      img: Undraw3,
    },
    {
      title: "Mobile Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur",
      img: Undraw4,
    },
    {
      title: "Web Application",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur",
      img: Undraw1,
    },
  ];

  return (
    <div
      className=" my-5 md:my-0 md:h-screen flex flex-col justify-center"
      id="services"
    >
      <Title title="Services" subTitle="What can I do" />
      <div className="flex flex-col md:flex-row my-10 gap-5">
        {services?.map((service) => {
          return (
            <div className=" basis-1/3 shadow-sm border border-gray-200 rounded-lg py-3 px-2  flex flex-col justify-center items-center">
              <div className="">
                <img src={service.img} alt="" className=" h-36" />
              </div>
              <div className=" text-center mt-auto">
                <span className=" font-medium italic ">
                  {service.title}
                </span>
                <p className=" text-gray-500 text-sm my-2">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
