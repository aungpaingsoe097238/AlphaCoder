import React from "react";
import photo from "../../../assets/images/aps/license.png";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import LineTitle from "../../utli/LineTitle";
import { IoLogoJavascript } from "react-icons/io5";
import { SiBootstrap, SiTailwindcss, SiReact } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { TbBrandNuxt, TbBrandNextjs } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";

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
      text: "Aung Zaya Housing, Postal Code(22/301), Insein, Yangon, Myanmar",
    },
  ];
  const downloadPDF = () => {
    const downloadLink = document.createElement("a");
    downloadLink.target = "_black";
    downloadLink.href = `https://alphacoder.onrender.com/resume_aps.pdf`;
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
                className=" h-64 w-56 object-cover borde mx-auto rounded-sm shadow-sm border border-slate-700 "
                alt=""
              />
            </div>
            <div className="mt-3">
              <div className=" flex justify-center items-center gap-10 text-slate-700">
                <a
                  href="https://www.facebook.com/aung.p.soe.5437"
                  target="_black"
                >
                  <BsFacebook className=" text-2xl cursor-pointer hover:opacity-70" />
                </a>
                <a
                  href="https://www.instagram.com/aung.p.soe.532/"
                  target="_black"
                >
                  <BsInstagram className=" text-2xl cursor-pointer hover:opacity-70" />
                </a>
                <a href="https://github.com/aungpaingsoe097238" target="_black">
                  <BsGithub className=" text-2xl cursor-pointer hover:opacity-70" />
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
                  Check Resume
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
                  <div className="w-[50px]  text-center">
                    <IoLogoJavascript className=" text-2xl mx-auto" />
                    <span className="text-xs">JavaScript</span>
                  </div>
                </li>
                <li>
                  <div className="w-[50px]  text-center">
                    <SiReact className=" text-2xl mx-auto" />
                    <span className="text-xs">React</span>
                  </div>
                </li>
                <li>
                  <div className="w-[50px]  text-center">
                    <FaVuejs className=" text-2xl mx-auto" />
                    <span className="text-xs">Vue</span>
                  </div>
                </li>
              </ul>
              <ul className=" flex justify-center gap-6">
                <li>
                  <div className="w-[50px]  text-center">
                    <TbBrandNextjs className=" text-2xl mx-auto" />
                    <span className="text-xs">Next</span>
                  </div>
                </li>
                <li>
                  <div className="w-[50px]  text-center">
                    <TbBrandNuxt className=" text-2xl mx-auto" />
                    <span className="text-xs">Nuxt3</span>
                  </div>
                </li>
                <li>
                  <div className="w-[50px]  text-center">
                    <SiLaravel className=" text-2xl mx-auto" />
                    <span className="text-xs">Laravel</span>
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
                    <SiTailwindcss className=" text-2xl mx-auto" />
                    <span className="text-xs">TailwindCss</span>
                  </div>
                </li>
                <li>
                  <div className=" w-[50px] text-center">
                    <SiBootstrap className=" text-2xl mx-auto" />
                    <span className="text-xs">Bootstrap5</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className=" md:basis-2/3">
            <div className=" text-md underline text-slate-800 mb-3 ">Other</div>
            <p className=" text-slate-700 text-sm md:w-[50%]">
              I can make a beautiful single page website with responsive using
              powerfull front-end tools and framework like vite, Nuxt js etc...
              I can work with team and i have good communication.
            </p>
          </div>
        </div>
        <LineTitle title="Experience" />
        <div className=" flex">
          <div className=" basis-1/3">
            <div className=" text-center text-slate-700">
              <div className=" flex flex-col gap-4 text-sm">
                <div>January 2022 〜 June 2023</div>
              </div>
            </div>
          </div>
          <div className=" basis-2/3">
            <div className=" flex flex-col gap-4 text-sm text-slate-700">
              <div className=" font-bold">Marathon Myanmar Company</div>
              <div className=" md:w-[50%]">
                Junior Full-Stack Web Developer.
              </div>
            </div>
          </div>
        </div>
        <div className=" flex mt-4">
          <div className=" basis-1/3">
            <div className=" text-center text-slate-700">
              <div className=" flex flex-col gap-4 text-sm">
                <div>June 2023 〜 Present</div>
              </div>
            </div>
          </div>
          <div className=" basis-2/3">
            <div className=" flex flex-col gap-4 text-sm text-slate-700">
              <div className=" font-bold">UMG Myanmar Company</div>
              <div className=" md:w-[50%]">Full-Stack Web Developer.</div>
            </div>
          </div>
        </div>
        <LineTitle title="End" />
      </div>
    </div>
  );
};

export default AboutScreen;
