import { useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Moti from "./components/Moti";
import Skill from "./components/Skill";

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
          <Skill />
        </div>
      </div>
    </>
  );
}

export default App;
