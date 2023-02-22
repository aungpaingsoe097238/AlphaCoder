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
    <nav className=" md:block w-full py-2  fixed top-0 z-10 bg-white ">
      <div className="w-[70%] mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <span className=" text-xl text-slate-800">Maw Gyi</span>
        </div>
        <div className=" text-slate-800  active:bg-slate-200 rounded-full p-1">
          <TiThMenuOutline
            className="text-2xl cursor-pointer "
            onClick={handleSideBar}
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
