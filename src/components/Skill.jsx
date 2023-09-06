import React from "react";
import "../assets/skill.css";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNuxtdotjs,
  SiNextcloud,
} from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandNuxt, TbBrandNextjs } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";

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
              <IoLogoJavascript className=" text-2xl" />
              JavaScript
            </div>
          </li>
          <li>
            <div className="flex gap-1 items-center font-bold">
              <SiReact className=" text-2xl" />
              React
            </div>
          </li>
          <li>
            <div className="flex gap-1 items-center font-bold">
              <FaVuejs className=" text-2xl" />
              Vue
            </div>
          </li>
        </div>

        <div className=" md:flex md:gap-10">
          <li>
            <div className="flex gap-1 items-center font-bold">
              <SiNuxtdotjs className=" text-2xl" />
              Nuxt3
            </div>
          </li>
          <li>
            <div className="flex gap-1 items-center font-bold">
              <TbBrandNextjs className=" text-2xl" />
              Next
            </div>
          </li>
          <li>
            <div className="flex gap-1 items-center font-bold">
              <SiPhp className=" text-2xl" />
              PHP
            </div>
          </li>
        </div>

        <div className=" md:flex md:gap-10">
          <li>
            <div className="flex gap-1 items-center font-bold">
              <SiLaravel className=" text-2xl" />
              Laravel
            </div>
          </li>
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
        </div>
      </ul>
    </div>
  );
};

export default Skill;
