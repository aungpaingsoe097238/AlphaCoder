import React from "react";

const Footer = () => {
  return (
    <div className=" relative">
      <div className=" absolute bottom-5 left-10 text-slate-600 text-sm italic">
        Created by Alpha@2023
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,160L30,138.7C60,117,120,75,180,96C240,117,300,203,360,213.3C420,224,480,160,540,149.3C600,139,660,181,720,218.7C780,256,840,288,900,261.3C960,235,1020,149,1080,149.3C1140,149,1200,235,1260,240C1320,245,1380,171,1410,133.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Footer;
