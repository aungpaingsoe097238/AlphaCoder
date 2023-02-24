import React from "react";

const LineTitle = (props) => {
  return (
    <div className=" flex items-center gap-1 my-5">
      <div className="  italic text-sm">{props.title}</div>
      <div className=" w-full h-[1px] bg-slate-600"></div>
    </div>
  );
};

export default LineTitle;
