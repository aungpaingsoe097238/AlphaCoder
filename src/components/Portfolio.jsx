import React from "react";
import Title from "./utli/Title";
import "swiper/css";
import "swiper/css/pagination";
import ProjectSwiper from "./ProjectSwiper";
import { useDispatch } from "react-redux";
import { addState } from "../features/services/modelSlice";

const Portfolio = () => {
  const dispatch = useDispatch();
  const handleOpenProjectModel = () => {
    dispatch(addState({ screen: "projects" }));
  };
  return (
    <div
      className="portfolio md:h-screen my-5 md:my-0 flex flex-col justify-center "
      id="portfolio"
    >
      <Title title="Portfolio" subTitle="Work do so far" />
      <div className=" md:hidden">
        <ProjectSwiper media="1" />
      </div>
      <div className=" hidden md:block ">
        <ProjectSwiper media="3" />
      </div>
      <div className=" text-center ">
        <span className=" text-sm  text-slate-700 " >
          Other projects can be explored <span className="underline cursor-pointer font-bold hover:text-slate-500 " onClick={handleOpenProjectModel}>Click Here</span>
        </span>
      </div>
    </div>
  );
};

export default Portfolio;
