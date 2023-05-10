import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AboutImg from "../assets/images/aps/about.png";
import { addState } from "../features/services/modelSlice";
import Title from "./utli/Title";

const About = () => {

  const dispatch = useDispatch();

  const handleModel = () => {
    dispatch(addState({ screen : 'about' }));
  }

  return (
    <>
      <div
        className="about md:h-screen my-10 md:my-0 flex flex-col justify-center gap-5"
        id="about"
      >
        <Title title="About Me" subTitle="Who am i" />
        <div className="flex flex-col md:flex-row gap-10">
          <div className=" basis-1/3 ">
            <div className=" ">
              <img
                src={AboutImg}
                className="h-[400px] w-max-[100%] border  rounded-lg shadow-sm grayscale-[90%] "
                alt=""
              />
              <div className=" relative">
                <div className=" flex justify-center items-center text-white text-xl bg-gray-700 w-28 h-28 rounded-full opacity-80 absolute -bottom-10 -left-10">
                  23
                </div>
                <div className=" absolute bg-gray-700 w-16 h-16 rounded-full opacity-80 bottom-8 left-3 "></div>
              </div>
            </div>
          </div>
          <div className=" basis-2/3 flex gap-3 flex-col">
            <div>
              <div className=" text-2xl font-semibold mb-2">
                I'm Aung Paing Soe
              </div>
              <p className="mb-5 text-slate-500">
                My name is Aung Paing Soe.I can create a Beautiful Website, Web Application using
                JavaScript,PHP and porpular framework like Laravel, React and Vue.Also I can create 
                Mobile Applications using React Native.I'm ready for learn latest technologies. 
              </p>
              <button className="button-52" role="button" onClick={handleModel}>
                More About Me
              </button>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
                <tbody>
                  <tr>
                    <td className="py-2">Name</td>
                    <td>:</td>
                    <td>Aung Paing Soe</td>
                  </tr>
                  <tr >
                    <td className="py-2">Email</td>
                    <td>:</td>
                    <td>aungpaingsoe097238@gmail.com</td>
                  </tr>
                  <tr >
                    <td className="py-2">Phone</td>
                    <td>:</td>
                    <td>09-960-187-283</td>
                  </tr>
                  <tr >
                    <td className="py-2">Birthday</td>
                    <td>:</td>
                    <td>5-3-2000</td>
                  </tr>
                  <tr >
                    <td className="py-2">Gender</td>
                    <td>:</td>
                    <td>Male</td>
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
