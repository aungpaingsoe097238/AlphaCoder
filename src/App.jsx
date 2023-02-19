import { useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Moti from "./components/Moti";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Hobbies from "./components/Hobbies";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Home />
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
          <Gallery/>
        </div>
      </div>
    </>
  );
}

export default App;
