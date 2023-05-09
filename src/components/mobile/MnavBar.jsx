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

const MnavBar = () => {

  return (
    <div className=" md:hidden w-screen fixed z-[2] bottom-0 bg-white border border-t-slate-200 ">
      <ul className="flex justify-around items-center pt-2 text-slate-500  ">
        <a href="#home">
          <li className="m-sidebar-active">
            <GoHome className=" text-xl " />
            <span className=" text-xs">Home</span>
          </li>
        </a>

        <a href="#about">
          <li className="m-sidebar-active">
            <VscAccount className=" text-xl " />
            <span className=" text-xs">About</span>
          </li>
        </a>

        <a href="#portfolio">
          <li className="m-sidebar-active">
            <MdComputer className=" text-xl " />
            <span className=" text-xs">Protfolio</span>
          </li>
        </a>

        <a href="#services">
          <li className="m-sidebar-active">
            <FiActivity className=" text-xl" />
            <span className=" text-xs">Services</span>
          </li>
        </a>

        <a href="#contact">
          <li className="m-sidebar-active">
            <MdContactPhone className=" text-xl " />
            <span className=" text-xs">Contact</span>
          </li>
        </a> 
      </ul>
    </div>
  );
};

export default MnavBar;
