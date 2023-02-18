import React from "react";

const Title = (props) => {
  return (
    <div className="">
      <div className="flex gap-2 items-center">
        <span className=" text-3xl font-bold border-2 border-black border-t-0 border-l-0 border-r-0">
          { props.title }
        </span>
        <span className=" text-xs bg-gray-300 p-1">{ props.subTitle }</span>
      </div>
    </div>
  );
};

export default Title;
