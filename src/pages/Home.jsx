import React, { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hobbies from "../components/Hobbies";
import Moti from "../components/Moti";
import NavBar from "../components/NavBar";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Top from "../components/Top";
import Skill from "../components/Skill";
import MnavBar from "../components/mobile/MnavBar";
import Model from "../components/model/Model";
import { useSelector } from "react-redux";

const Home = () => {
  
  const model = useSelector((state) => state?.model);

  return (
    <>
      <NavBar />
      {/* Only For Mobile */}
      <MnavBar />
      {/* --- */}
      {/* Model */}
      {model?.open && <Model />}
      {/* --- */}
      <div className="container-fuild">
        <Top />
        <div className="w-[90%] md:w-[70%] mx-auto ">
          <About />
        </div>
        <Skill />
        <div className="w-[90%] md:w-[70%] mx-auto ">
          <Portfolio />
        </div>
        <Moti />
        <div className="w-[90%] md:w-[70%] mx-auto ">
          <Services />
        </div>
        <Hobbies />
        <div className="w-[90%] md:w-[70%] mx-auto">
          {/* <Gallery /> */}
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
