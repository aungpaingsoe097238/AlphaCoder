import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BsCreditCard2Back, BsImages, BsTelephone } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";

const NavBar = () => {
  const handleSideBar = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("animate__slideInRight");
    sidebar.addEventListener("animationend", (_) =>
      sidebar.classList.remove("animate__slideInRight")
    );
    sidebar.classList.toggle("hidden");
  };

  return (
    <nav className="w-full py-3 fixed top-0 z-10  bg-transparent ">
      <div className="w-[70%] mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <span className=" text-xl text-slate-800">Maw Gyi</span>
        </div>
        <div className=" text-slate-800">
          <TiThMenuOutline
            className=" text-2xl cursor-pointer"
            onClick={handleSideBar}
          />
        </div>
      </div>
      <div className=" sidebar fixed right-2 bottom-2  hidden">
        <ul className=" bg-white py-5 px-5 flex flex-col gap-7 border border-slate-500 sidebar rounded-sm shadow-lg border-1 animate__animated animate__slideInRight">
          <li className="">
            <a href="#home">
              <GoHome className=" text-2xl text-slate-500" />
            </a>
          </li>
          <li>
            <a href="#about">
              <BsCreditCard2Back className=" text-2xl text-slate-500" />
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <MdComputer className=" text-2xl text-slate-500" />
            </a>
          </li>
          <li>
            <a href="#services">
              <FiActivity className=" text-2xl text-slate-500" />
            </a>
          </li>
          <li>
            <a href="#gallery">
              <BsImages className=" text-2xl text-slate-500" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <BsTelephone className=" text-2xl text-slate-500 " />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
