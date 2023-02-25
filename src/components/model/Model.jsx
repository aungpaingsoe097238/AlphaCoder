import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import AboutScreen from "./screen/AboutScreen";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../../features/services/modelSlice";
import GalleryScreen from "./screen/GalleryScreen";
import ProjectScreeen from "./screen/ProjectScreeen";

const Model = () => {
  const dispatch = useDispatch();
  const screen = useSelector((state) => state?.model?.screen);

  const handleModel = () => {
    dispatch(addState({ screen: "about" }));
  };

  let Screen;
  if (screen === "about") {
    Screen = (
      <div className="container bg-white h-full w-full md:w-[90%] md:h-[90%] rounded-sm">
        <AboutScreen />
      </div>
    );
  } else if (screen === "gallery") {
    Screen = (
      <div className="containe bg-transparent h-full w-full md:w-[90%] md:h-[90%] rounded-sm">
        <GalleryScreen />
      </div>
    );
  } else if (screen === "projects") {
    Screen = (
      <div className="container bg-white h-full w-full md:w-[90%] md:h-[90%] rounded-sm">
        <ProjectScreeen />
      </div>
    );
  }

  return (
    <div className=" model relative">
      <div className=" absolute top-0 right-0 md:top-2 md:right-2">
        <AiOutlineCloseCircle
          onClick={handleModel}
          className=" text-6xl cursor-pointer text-slate-900 hover:text-rose-500 transition-all"
        />
      </div>
      {Screen}
    </div>
  );
};

export default Model;
