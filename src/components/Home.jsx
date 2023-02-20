import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hobbies from "./Hobbies";
import Moti from "./Moti";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Top from "./Top";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Top />
        <div className="w-[70%] mx-auto ">
          <About />
        </div>
        <Moti />
        <div className="w-[70%] mx-auto ">
          <Portfolio />
        </div>
        <Hobbies />
        <div className="w-[70%] mx-auto ">
          <Services />
          <Gallery />
          <Contact/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
