import React from "react";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const Social = () => {
  return (
    <ul className=" flex md:flex-col gap-10">
      <li>
        <a href="">
          <BsFacebook className="text-xl cursor-pointer" />
        </a>
      </li>
      <li>
        <a href="">
          <BsInstagram className="text-xl cursor-pointer" />
        </a>
      </li>
      <li>
        <a href="">
          <BsGithub className="text-xl cursor-pointer" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
