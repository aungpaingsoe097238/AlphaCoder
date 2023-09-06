import React, { useEffect, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import SideBar from "./SideBar";

const NavBar = () => {

  const handleSideBar = (e) => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("animate__slideInRight");
    sidebar.classList.toggle("hidden");
  };

  return (
    <nav className="w-full py-2  fixed top-0 z-10 bg-white  text-slate-500 hidden md:block">
      <div className="w-[70%] mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <span className=" text-xl ">Alpha</span>
        </div>
        <div className=" active:bg-slate-200 rounded-full p-1" onClick={handleSideBar}>
          <TiThMenuOutline
            className="text-2xl cursor-pointer"
          />
        </div>
      </div>
      <div className=" sidebar fixed right-0 bottom-0 hidden animate__animated">
        <SideBar />
      </div>
    </nav>
  );
};

export default NavBar;
