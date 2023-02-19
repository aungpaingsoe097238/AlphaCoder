import React from "react";
import { CgGym, CgCode } from "react-icons/cg";
import { GoBook } from 'react-icons/go'
import {TbMountain } from 'react-icons/tb'
 
const Hobbies = () => {
  return (
    <div className="hobbies text-white flex flex-col">
      <div className="my-5">
        <span className=" italic font-bold">- Hobbies -</span>
      </div>
      <ul className=" flex gap-10">
        <li>
          <div className="flex gap-1 items-center">
            <CgGym className=" text-xl" />
            Gym
          </div>
        </li>
        <li>
          <div className="flex gap-1 items-center">
            <CgCode className=" text-xl" />
            Coding
          </div>
        </li>
        <li>
        <div className="flex gap-1 items-center">
            <GoBook className=" text-xl" />
            Reading
          </div>
        </li>
        <li>
        <div className="flex gap-1 items-center">
            <TbMountain className=" text-xl" />
            Hinking
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
