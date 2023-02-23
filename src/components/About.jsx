import React, { useEffect, useState } from "react";
import AboutImg from "../assets/images/kznm/about.png";
import Title from "./utli/Title";

const About = () => {
  return (
    <>
      <div
        className="about md:h-screen my-10 md:my-0 flex flex-col justify-center gap-5"
        id="about"
      >
        <Title title="About Me" subTitle="Who am i" />
        <div className="flex flex-col md:flex-row">
          <div className=" basis-1/3 ">
            <div className=" ">
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
          <div className=" basis-2/3 flex gap-3 flex-col">
            <div>
              <div className=" text-2xl font-semibold mb-2">
                I'm Khaing Zar Ni Maw
              </div>
              <p className="mb-5 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti non accusantium alias nemo iure iusto accusamus
                voluptatum, esse autem, dignissimos expedita totam laborum id
                culpa sequi ut vitae deleniti officiis.
              </p>
              <button className="button-52" role="button">
                More About Me
              </button>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
                <tbody>
                  <tr>
                    <td className="py-2">Name:</td>
                    <td>Khaing Zar Ni Maw</td>
                  </tr>
                  <tr >
                    <td className="py-2">Email:</td>
                    <td>khaingzarnimaw1996@gmail.com</td>
                  </tr>
                  <tr >
                    <td className="py-2">Phone:</td>
                    <td>080-5160-7234</td>
                  </tr>
                  <tr >
                    <td className="py-2">Birthday:</td>
                    <td>10-6-1996</td>
                  </tr>
                  <tr >
                    <td className="py-2">Gender:</td>
                    <td>Female</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
