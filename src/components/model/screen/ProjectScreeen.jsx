import React from "react";
import StudyGirl from "../../../assets/images/wallpaper/studygirl.jpg";
import StudyGirl2 from "../../../assets/images/wallpaper/studygirl2.jpg";
import StudyGirl3 from "../../../assets/images/wallpaper/studygirl3.jpg";
import Girl from "../../../assets/images/wallpaper/girl.png";
import Girl2 from "../../../assets/images/wallpaper/girl2.png";
import Girl3 from "../../../assets/images/wallpaper/girl3.png";
import LineTitle from "../../utli/LineTitle";
import projectData from "../../../core/project.js";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";

const ProjectScreeen = () => {
  return (
    <>
      <div className="overflow-y-auto h-full ">
        <div className="flex justify-center flex-wrap gap-5">
          {projectData?.map((project) => (
            <div className=" md:basis-1/4">
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
                      <a href={project.github} target="_black">
                        <AiFillGithub className=" text-2xl cursor-pointer hover:text-slate-500 " />
                      </a>
                      <a href={project.url} target="_black">
                        <AiOutlineArrowRight className=" text-2xl cursor-pointer hover:text-slate-500" />
                      </a>
                    </div>
                  </span>
                  <p className=" my-2 text-sm  text-slate-700 ">
                    {project.text}
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                    {project.tools.map((tool, index) => (
                      <li key={index} className=" border p-1 bg-slate-200 ">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectScreeen;
