import React from "react";
import "../assets/skill.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiBootstrap, SiTailwindcss, SiReact, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbHash } from "react-icons/tb"

const Skill = () => {
  return (
    <div className="skill text-white flex flex-col justify-center">
      <div className="my-2 md:my-5">
        <span className=" italic font-bold">- Skills -</span>
      </div>
      <ul className="flex md:flex-row text-xs md:text-sm md:gap-10 gap-2">
        
        <div className=" md:flex md:gap-10">
          <li>
            <div className="flex gap-1 items-center font-bold">
              <AiFillHtml5 className=" text-2xl" />
              Html
            </div>
          </li>
          <li>
            <div className="flex gap-1 items-center font-bold">
              <IoLogoCss3 className=" text-2xl" />
              Css
            </div>
          </li>
          <li>
            <div className="flex gap-1 items-center font-bold">
              <IoLogoJavascript className=" text-2xl" />
              JavaScript
            </div>
          </li>
        </div>

        <div className=" md:flex md:gap-10">
          <li>
            <div className="flex gap-1 items-center font-bold">
              <SiBootstrap className=" text-2xl" />
              BootStrap5
            </div>
          </li>
          <li>
            <div className="flex gap-1 items-center font-bold">
              <SiTailwindcss className=" text-2xl" />
              Tailwind
            </div>
          </li>
          <li>
            <div className="flex gap-1 items-center font-bold">
              <SiReact className=" text-2xl" />
              React
            </div>
          </li>
        </div>

        <div className=" md:flex md:gap-10">
          <li>
            <div className="flex gap-1 items-center font-bold">
              <TbHash className=" text-2xl" />
              C#
            </div>
          </li>
          <li>
            <div className="flex gap-1 items-center font-bold">
              <GrMysql className=" text-2xl" />
              MySQL
            </div>
          </li>
          <li>
            <div className="flex gap-1 items-center font-bold">
              <SiMongodb className=" text-2xl" />
              MongoDB
            </div>
          </li>
        </div>

      </ul>
    </div>
  );
};

export default Skill;
