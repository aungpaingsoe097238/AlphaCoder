import React from "react";
import StudyGirl from "../../../assets/images/wallpaper/studygirl.jpg";
import StudyGirl2 from "../../../assets/images/wallpaper/studygirl2.jpg";
import StudyGirl3 from "../../../assets/images/wallpaper/studygirl3.jpg";
import Girl from "../../../assets/images/wallpaper/girl.png";
import Girl2 from "../../../assets/images/wallpaper/girl2.png";
import Girl3 from "../../../assets/images/wallpaper/girl3.png";
import LineTitle from "../../utli/LineTitle";

const ProjectScreeen = () => {
  const projects = [
    {
      title: "Project One",
      image: StudyGirl,
      url: "https://www.google.com",
    },
    {
      title: "Project Two",
      image: StudyGirl2,
      url: "https://www.google.com",
    },
    {
      title: "Project Three",
      image: StudyGirl3,
      url: "https://www.google.com",
    },
    {
      title: "Project Four",
      image: Girl,
      url: "https://www.google.com",
    },
    {
      title: "Project Five",
      image: Girl2,
      url: "https://www.google.com",
    },
    {
      title: "Project Six",
      image: Girl3,
      url: "https://www.google.com",
    },
  ];
  return (
    <div className="overflow-y-auto h-full ">
      <div className="flex justify-center mt-12 m-5  flex-wrap gap-5">
        {projects?.map((project) => (
          <div className=" md:basis-1/4">
            <div class=" shadow-sm rounded">
              <div class="grid">
                <figure class="effect-sadie">
                  <img src={project.image} alt="img02" />
                  <figcaption>
                    <p class="text-xl italic font-semibold text-white">
                      - { project.title } -
                    </p>
                    <a href={ project.url } target="_blank"></a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectScreeen;
