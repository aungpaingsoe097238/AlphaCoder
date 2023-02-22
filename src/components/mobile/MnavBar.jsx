import React from "react";
import { GoHome } from "react-icons/go";
import { BsCreditCard2Back, BsImages, BsTelephone } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { MdComputer } from "react-icons/md";

const MnavBar = () => {
  return (
    <div className=" md:hidden w-screen fixed z-20 bottom-0 bg-white border border-t-slate-200 ">
      <ul className="flex justify-around items-center py-2">
        <a href="#home">
          <li className="sideber-active">
            <GoHome className=" text-2xl text-slate-500 " />
          </li>
        </a>

        <a href="#about">
          <li className="sideber-active">
            <BsCreditCard2Back className=" text-2xl text-slate-500" />
          </li>
        </a>

        <a href="#portfolio">
          <li className="sideber-active">
            <MdComputer className=" text-2xl text-slate-500" />
          </li>
        </a>

        <a href="#services">
          <li className="sideber-active">
            <FiActivity className=" text-2xl text-slate-500" />
          </li>
        </a>

        <a href="#gallery">
          <li className="sideber-active ">
            <BsImages className=" text-2xl text-slate-500" />
          </li>
        </a>

        <a href="#contact">
          <li className="sideber-active">
            <BsTelephone className=" text-2xl text-slate-500 " />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default MnavBar;
