import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import StudyGirl from "../assets/images/wallpaper/studygirl.jpg";
import StudyGirl2 from "../assets/images/wallpaper/studygirl2.jpg";
import StudyGirl3 from "../assets/images/wallpaper/studygirl3.jpg";
import Girl from "../assets/images/wallpaper/girl.png";
import Girl2 from "../assets/images/wallpaper/girl2.png";
import Girl3 from "../assets/images/wallpaper/girl3.png";
import projectData from "../core/project.js";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";

const ProjectSwiper = (props) => {
  return (
    <Swiper
      slidesPerView={props.media}
      spaceBetween={30}
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className=" my-10"
    >
      {projectData?.map((project) => (
        <SwiperSlide>
          <div className=" shadow-sm rounded">
            <div className="grid">
              <figure className="effect-sadie">
                <img src={project.image} alt="img02" />
                <figcaption>
                  <a href={project.url} target="_blank"></a>
                </figcaption>
              </figure>
            </div>
            <div className="my-3">
              <span className="flex justify-between items-center font-bold text-slate-800 ">
                <p>{project.title}</p>
                <div className=" flex justify-center items-center gap-1">
                  <a href={ project.github } target="_black">
                    <AiFillGithub className={ project.github === "" ? 'text-2xl cursor-not-allowed opacity-50' : 'text-2xl cursor-pointer hover:text-slate-500'} />
                  </a>
                  <a href={ project.url } target="_black">
                    <AiOutlineArrowRight className=" text-2xl cursor-pointer hover:text-slate-500" />
                  </a>
                </div>
              </span>
              <p className=" my-2 text-sm  text-slate-700 ">{project.text}</p>
              <ul className="flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                {project.tools.map((tool, index)=> <li key={index} className=" border p-1 bg-slate-200 ">{tool}</li>)}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
