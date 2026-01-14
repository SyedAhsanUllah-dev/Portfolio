import React from "react";

const ResumeTitle = ({ ResumeIcon, title }) => {
  return (
    <div>
      <h1 className="font-titleFont font-bold text-base cursor-pointer capitalize text-textColor relative z-10 px-6 py-3 borderBottom group">
        <span className="text-designColor group inline-flex">{ResumeIcon}</span>{" "}
        {title}
        <span className=" w-8 h-8 bg-graident-to-t from-designColor to-gray-600 inline-block rounded-full absolute left-2 top-2.5 opacity-10 -z-10  -translate-x-0 group-hover:translate-x-2  bg-linear-0 duration-500"></span>
      </h1>
    </div>
  );
};

export default ResumeTitle;
