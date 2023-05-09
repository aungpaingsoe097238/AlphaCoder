import React from "react";
import { useState } from "react";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const Social = () => {
  const socials = [
    { icon : "BsFacebook", link : "https://www.facebook.com/aung.p.soe.5437" }, 
    { icon : "BsInstagram", link : "https://www.instagram.com/aung.p.soe.532" }, 
    { icon : "BsGithub", link : "https://github.com/aungpaingsoe097238" }
  ];

  return (
    <ul className=" flex md:flex-col gap-10">
      {socials.map((social) => {
        const IconComponent = eval(social.icon); // Use eval to convert the icon name to a component
        return (
          <li>
            <a href={ social.link } target="_black">
              <IconComponent className="text-xl cursor-pointer"  />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
