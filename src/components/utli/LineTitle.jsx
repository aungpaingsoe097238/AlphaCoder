import React from "react";

const LineTitle = (props) => {
  return (
    <div className=" flex justify-center items-center gap-1 my-3">
      <div className=" inline-block">{props.title}</div>
      <div className="w-full h-[1px] bg-slate-600"></div>
    </div>
  );
};

export default LineTitle;
