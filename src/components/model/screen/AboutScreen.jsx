import React from "react";
import photo from "../../../assets/images/aps/license.png";
import c1 from "../../../assets/images/certificate/c1.jpg";
import c2 from "../../../assets/images/certificate/c2.jpg";
import c3 from "../../../assets/images/certificate/c3.jpg";
import c4 from "../../../assets/images/certificate/c4.jpg";
import c5 from "../../../assets/images/certificate/c5.jpg";
import c6 from "../../../assets/images/certificate/c6.jpg";
import c7 from "../../../assets/images/certificate/c7.jpg";
import c8 from "../../../assets/images/certificate/c8.jpg";
import c9 from "../../../assets/images/certificate/c9.jpg";
import { BsFacebook, BsInstagram, BsLine, BsGithub } from "react-icons/bs";
import LineTitle from "../../utli/LineTitle";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiBootstrap, SiTailwindcss, SiReact, SiMongodb } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

const AboutScreen = () => {
  const table_abouts = [
    { title: "Name", text: "Aung Paing Soe" },
    { title: "Email", text: "aungpaingsoe097238@gmail.com" },
    { title: "Phone", text: "09-960-187-283, 09-683-011-588" },
    { title: "Birthday", text: "5-3-2000" },
    { title: "Gender", text: "Male" },
    { title: "Nationality", text: "Burmese" },
    { title: "Relagion", text: "Buddha" },
    {
      title: "Address",
      text: "Aung Zaya Housing, Postal Code(22/301), Insein, Yangon, Myanmar"
    }
  ];

  const certificates = [
    { title: "ASP.NET MVC course in C#", text: "loare", img: c1 },
    { title: "ASP.NET MVC course in C#", text: "loare", img: c2 },
    { title: "ASP.NET MVC course in C#", text: "loare", img: c3 },
    { title: "ASP.NET MVC course in C#", text: "loare", img: c4 },
    { title: "ASP.NET MVC course in C#", text: "loare", img: c5 },
    { title: "ASP.NET MVC course in C#", text: "loare", img: c6 },
    { title: "ASP.NET MVC course in C#", text: "loare", img: c7 },
    { title: "ASP.NET MVC course in C#", text: "loare", img: c8 },
    { title: "ASP.NET MVC course in C#", text: "loare", img: c9 }
  ];

  const downloadPDF = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = `http://localhost:5173/resume_aps.pdf`;
    downloadLink.download = "resume_aps.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className=" w-full overflow-y-auto h-full">
      <div className=" my-5 mx-1 md:my-5 md:mx-3 ">
        <LineTitle title="Biography" />
        <div className="flex md:flex-row flex-col ">
          <div className=" md:basis-1/3">
            <div className="">
              <img
                src={photo}
                className=" h-64 border grayscale-[90%] mx-auto rounded-sm shadow-sm "
                alt=""
              />
            </div>
            <div className="my-2">
              <div className=" flex justify-center items-center gap-5 text-slate-700">
                <a href="https://www.facebook.com/aung.p.soe.5437" target="_black">
                  <BsFacebook className=" text-xl cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/aung.p.soe.532/" target="_black">
                  <BsInstagram className=" text-xl cursor-pointer" />
                </a>
                <a href="https://github.com/aungpaingsoe097238" target="_black">
                  <BsGithub className=" text-xl cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className=" md:basis-2/3">
            <div className=" flex flex-col gap-2">
              <div>
                <table className=" text-sm text-slate-700">
                  <tbody>
                    {table_abouts?.map((list) => (
                      <tr>
                        <td className="py-1">{list.title}</td>
                        <td>:</td>
                        <td>{list.text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <button
                  className=" py-2 px-3 border border-slate-700 rounded-sm hover:bg-slate-700 hover:text-white "
                  onClick={downloadPDF}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
        <LineTitle title="Programming" />
        <div className=" flex md:flex-row flex-col">
          <div className=" md:basis-1/3">
            <div className="flex flex-col gap-3 text-slate-700">
              <ul className=" flex justify-center gap-6">
                <li>
                  <div className=" w-[50px] text-center">
                    <AiFillHtml5 className=" text-2xl mx-auto" />
                    <span className="text-xs">Html</span>
                  </div>
                </li>
                <li>
                  <div className="w-[50px]  text-center">
                    <IoLogoCss3 className=" text-2xl mx-auto" />
                    <span className="text-xs">Css</span>
                  </div>
                </li>
                <li>
                  <div className="w-[50px]  text-center">
                    <IoLogoJavascript className=" text-2xl mx-auto" />
                    <span className="text-xs">JavaScript</span>
                  </div>
                </li>
              </ul>
              <ul className=" flex justify-center gap-6">
                <li>
                  <div className=" w-[50px] text-center">
                    <SiBootstrap className=" text-2xl mx-auto" />
                    <span className="text-xs">Bootstrap5</span>
                  </div>
                </li>
                <li>
                  <div className="w-[50px]  text-center">
                    <SiTailwindcss className=" text-2xl mx-auto" />
                    <span className="text-xs">TailwindCss</span>
                  </div>
                </li>
                <li>
                  <div className="w-[50px]  text-center">
                    <SiReact className=" text-2xl mx-auto" />
                    <span className="text-xs">React</span>
                  </div>
                </li>
              </ul>
              <ul className=" flex justify-center gap-6">
                <li>
                  <div className=" w-[50px] text-center">
                    <SiPhp className=" text-2xl mx-auto" />
                    <span className="text-xs">PHP</span>
                  </div>
                </li>

                <li>
                  <div className="w-[50px]  text-center">
                    <SiLaravel className=" text-2xl mx-auto" />
                    <span className="text-xs">Laravel</span>
                  </div>
                </li>
                <li>
                  <div className="w-[50px]  text-center">
                    <GrMysql className=" text-2xl mx-auto" />
                    <span className="text-xs">MySQL</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className=" md:basis-2/3">
            <div className=" text-md underline text-slate-800 mb-3 ">Other</div>
            <p className=" text-slate-700 text-sm md:w-[50%]">
              I can make a beautiful single page website with responsive 
              using powerfull front-end tools and framework like vite, Nuxt js etc...
              I can work with team and i have good communication.   
            </p>
          </div>
        </div>
        <LineTitle title="Experience" />
        <div className=" flex">
          <div className=" basis-1/3">
            <div className=" text-center text-slate-700">
              <div className=" flex flex-col gap-4 text-sm">
                <div>January 2022 〜 Present</div>
              </div>
            </div>
          </div>
          <div className=" basis-2/3">
            <div className=" flex flex-col gap-4 text-sm text-slate-700">
              <div className=" font-bold">
               Marathon Myanmar Company
              </div>
              <div className=" md:w-[50%]">
                Api development for mobile and admin dashboard using Laravel.And also develop front-end dashboard using NuxtJs.   
              </div>
            </div>
          </div>
        </div>
        <LineTitle title="End" />
        {/* <LineTitle title="Certification" />
        <div className="">
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                type: "fraction"
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className=""
            >
              {certificates?.map((certificate) => (
                <SwiperSlide>
                  <div className="w-full md:w-[90%] mx-auto flex md:flex-row flex-col gap-3 md:gap-0 items-center ">
                    <div className=" md:basis-1/3">
                      <div className="p-1 md:p-5">
                        <img
                          src={certificate.img}
                          className=" border-2 max-h-[200px] border-slate-500 cursor-zoom-in mx-auto rounded-sm "
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" md:basis-2/3">
                      <div className=" text-slate-800 underline mb-3">
                        {certificate.title}
                      </div>
                      <div className="text-sm text-slate-700">
                        {certificate.text}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutScreen;
