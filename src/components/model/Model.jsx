import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import AboutScreen from "./screen/AboutScreen";
import { useDispatch } from "react-redux";
import { addState } from "../../features/services/modelSlice";

const Model = () => {
  
  const dispatch = useDispatch();

  const handleModel = () => {
    dispatch(addState({ screen : 'about' }));
  }

  return (
    <div className=" model relative">
      <div className=" absolute top-2 right-2">
        <AiOutlineCloseCircle onClick={ handleModel } className=" text-6xl cursor-pointer text-slate-900 hover:text-rose-500 transition-all" />
      </div>
      <div className="container  bg-white w-[90%] h-[90%] rounded-sm">
        <AboutScreen />
      </div>
    </div>
  );
};

export default Model;
