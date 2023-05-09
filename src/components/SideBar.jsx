import React from "react";
import { GoHome } from "react-icons/go";
import { BsCreditCard2Back, BsImages, BsTelephone } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import {
  MdComputer,
  MdContactPhone,
  MdOutlineAccountCircle
} from "react-icons/md";
import { VscAccount } from "react-icons/vsc";


const SideBar = () => {
  return (
    <ul className=" bg-white py-5 px-3 flex flex-col justify-center items-center gap-7 border border-slate-500 rounded-sm border-1 border-r-0 ">
      <a href="#home">
        <li className="sideber-active p-1">
          <GoHome className=" text-2xl text-slate-500 " />
        </li>
      </a>

      <a href="#about">
        <li className="sideber-active p-1">
          <VscAccount className=" text-2xl text-slate-500" />
        </li>
      </a>

      <a href="#portfolio">
        <li className="sideber-active p-1">
          <MdComputer className=" text-2xl text-slate-500" />
        </li>
      </a>

      <a href="#services">
        <li className="sideber-active p-1">
          <FiActivity className=" text-2xl text-slate-500" />
        </li>
      </a>

      <a href="#contact">
        <li className="sideber-active p-1">
          <MdContactPhone className=" text-2xl text-slate-500 " />
        </li>
      </a>
    </ul>
  );
};

export default SideBar;
