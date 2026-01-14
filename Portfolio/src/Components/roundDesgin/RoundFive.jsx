import React from "react";

const RoundFive = () => {
  return (
    <div className="w-96 h-96  rounded-full absolute top-72 left-72 ">
      <div className="w-full h-full relative animate-reverse-spin">
        <div className="w-28 h-28 rounded-full bg-yellow-500 absolute left-16 -bottom-10 blur-2xl"></div>
        <div className="w-28 h-28 rounded-full bg-designColor absolute -right-10 top-32 blur-2xl"></div>
      </div>
    </div>
  );
};

export default RoundFive;
