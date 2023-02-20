import React, { useEffect } from "react";
import AboutImg from "../assets/images/kznm/about.png";
import Title from "./utli/Title";

const About = () => {
  return (
    <div
      className="about h-screen flex flex-col justify-center gap-5"
      id="about"
    >
      <Title title="About Me" subTitle="Who am i" />
      <div className="flex flex-row gap-5">
        <div className=" basis-1/3">
          <div className="">
            <img
              src={AboutImg}
              className="h-[400px] w-max-[100%] rounded-sm shadow-sm"
              alt=""
            />
            <div className=" relative">
              <div className=" flex justify-center items-center text-white text-xl bg-red-500 w-28 h-28 rounded-full opacity-80 absolute -bottom-10 -left-10">
                27歳
              </div>
              <div className=" absolute bg-red-500 w-16 h-16 rounded-full opacity-80 bottom-8 left-3 "></div>
            </div>
          </div>
        </div>
        <div className=" basis-2/3">
          <div className=" text-2xl font-semibold mb-2">
            I'm Khaing Zar Ni Maw
          </div>
          <p className="mb-5 text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ab. Non quibusdam itaque perspiciatis mollitia, sint porro! Debitis
            nostrum vero maxime quas illum accusantium laborum. Rerum unde
            nesciunt voluptates asperiores!
          </p>
          <button className="button-52" role="button">
            More About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
