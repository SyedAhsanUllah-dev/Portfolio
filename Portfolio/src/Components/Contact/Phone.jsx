import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Phone = () => {
  const phoneNumber = "+923327706350"; // no spaces for tel link

  return (
    <div className="w-full h-[70vh] flex flex-col gap-5 justify-center items-center">
      <a
        href={`tel:${phoneNumber}`}
        className="group flex items-center gap-3 px-10 py-10 border-2 border-zinc-600 text-gray-200
                   rounded-[100%] hover:border-designColor
                   transition-all duration-300 active:scale-95"
      >
        <FaPhoneAlt className="text-5xl duration-300 group-hover:scale-120 group-hover:text-designColor" />
      </a>
      <p className="text-base">Contact Now</p>
    </div>
  );
};

export default Phone;
