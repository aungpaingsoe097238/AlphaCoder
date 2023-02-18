import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BsCreditCard2Back, BsImages } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { GrPersonalComputer } from "react-icons/gr";

const NavBar = () => {
  const handleSideBar = () => {
   let sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("animate__slideInRight");
    sidebar.addEventListener('animationend', _ => sidebar.classList.remove('animate__slideInRight'))
    sidebar.classList.toggle("hidden");
  };

  return (
    <nav className="w-full py-3 fixed top-0 z-10  bg-transparent ">
      <div className="w-[70%] mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">Maw Gyi</div>
        <div>
          <AiOutlineMenu
            className=" text-xl cursor-pointer"
            onClick={handleSideBar}
          />
        </div>
      </div>
      <div className=" sidebar fixed right-2 top-[30%] hidden">
        <ul className=" bg-white py-5 px-5 flex flex-col gap-7 shadow-lg border-1 animate__animated animate__slideInRight">
          <li className="">
            <GoHome className=" text-2xl" />
          </li>
          <li>
            <BsCreditCard2Back className=" text-2xl" />
          </li>
          <li>
            <FiActivity className=" text-2xl" />
          </li>
          <li>
            <GrPersonalComputer className=" text-2xl " />
          </li>
          <li>
            <BsImages className=" text-2xl" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
