import React from "react";
import suya from "../../../assets/images/kznm/suya.jpg";
import photo from "../../../assets/images/kznm/photo.jpg";
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
import { GrMysql } from "react-icons/gr";
import { TbHash } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

const AboutScreen = () => {
  const table_abouts = [
    { title: "Name", text: "Khaing Zar Ni Maw" },
    { title: "Email", text: "khaingzarnimaw1996@gmail.com" },
    { title: "Phone", text: "080-5160-7234" },
    { title: "Birthday", text: "1996-6-10" },
    { title: "Gender", text: "Female" },
    { title: "Nationality", text: "Burmese" },
    { title: "Relagion", text: "Buddha" },
    {
      title: "Address",
      text: "〒 160-0007 東京都 新宿区荒木町15番地横内マンション302ホンケマンション２０２号",
    },
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
    { title: "ASP.NET MVC course in C#", text: "loare", img: c9 },
  ];

  return (
    <div className=" w-full overflow-y-auto h-full">
      <div className=" my-5 mx-1 md:my-5 md:mx-3 ">
        <LineTitle title="Biography" />
        <div className="flex md:flex-row flex-col ">
          <div className=" md:basis-1/3">
            <div className="">
              <img
                src={photo}
                className=" h-64 mx-auto rounded-sm shadow-sm "
                alt=""
              />
            </div>
            <div className="my-2">
              <div className=" flex justify-center items-center gap-5 text-slate-700">
                <BsFacebook className=" text-xl cursor-pointer" />
                <BsInstagram className=" text-xl cursor-pointer" />
                <BsLine className=" text-xl cursor-pointer" />
                <BsGithub className=" text-xl cursor-pointer" />
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
                <button className=" py-2 px-3 border border-slate-700 rounded-sm hover:bg-slate-700 hover:text-white ">
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
                    <TbHash className=" text-2xl mx-auto" />
                    <span className="text-xs">C#</span>
                  </div>
                </li>
                <li>
                  <div className="w-[50px]  text-center">
                    <GrMysql className=" text-2xl mx-auto" />
                    <span className="text-xs">MySQL</span>
                  </div>
                </li>
                <li>
                  <div className="w-[50px]  text-center">
                    <SiMongodb className=" text-2xl mx-auto" />
                    <span className="text-xs">MongoDB</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className=" md:basis-2/3">
            <div className=" text-md underline text-slate-800 mb-3">Other</div>
            <p className=" text-slate-700 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptatibus consectetur dolorum omnis. Laboriosam, obcaecati!
              Nostrum officiis neque repellat, dolorem ea voluptates aut. Omnis
              ex eos eveniet. Similique, perspiciatis itaque.
            </p>
          </div>
        </div>
        <LineTitle title="Education" />
        <div className=" flex">
          <div className=" basis-1/3">
            <div className=" text-center text-slate-700">
              <div className=" flex flex-col gap-4 text-sm">
                <div>2012年10月 〜 2016年10月</div>
                <div>2019年3月 〜 2021年3月</div>
                <div>2021年4月 〜 2023年3月</div>
              </div>
            </div>
          </div>
          <div className=" basis-2/3">
            <div className=" flex flex-col gap-4 text-sm text-slate-700">
              <div>
                B.A(Geography) Yangon University of Distance Education (Dagon
                branch)
              </div>
              <div>国際言葉学院</div>
              <div>
                専門学校静岡電子情報カレッジ IT スペシャリスト IT
                ゲームロボット＆システム学科
              </div>
            </div>
          </div>
        </div>
        <LineTitle title="Certification" />
        <div className="">
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                type: "fraction",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
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
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
