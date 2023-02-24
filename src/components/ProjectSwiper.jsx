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

const ProjectSwiper = (props) => {
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
      {projects?.map((project) => (
        <SwiperSlide>
          <div class=" shadow-sm rounded">
            <div class="grid">
              <figure class="effect-sadie">
                <img src={project.image} alt="img02" />
                <figcaption>
                  <p class="text-xl italic font-semibold text-white">
                    - {project.title} -
                  </p>
                  <a href={project.url} target="_blank"></a>
                </figcaption>
              </figure>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
