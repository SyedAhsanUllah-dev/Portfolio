import React from "react";

import {
  BiCodeAlt,
  BiCoffee,
  BiBug,
  BiRocket,
  BiTime,
} from "react-icons/bi";
import {
  FaReact,
  FaLaptopCode,
  FaLightbulb,
  FaKeyboard,
  FaMobileAlt,
} from "react-icons/fa";

const FunFactCard = ({ icon: Icon, title }) => {
  return (
    <div className="py-8 px-10 flex flex-col items-center gap-2 borderRight borderBottom text-center">
      <span className="text-2xl text-designColor  mb-2">
        <Icon />
      </span>

      <h2 className="text-sm font-titleFont leading-6 text-nowrap font-normal text-white">
        {title}
      </h2>
    </div>
  );
};

const FunFact = () => {
 const FunFactData = [
  {
    id: 1,
    icon: BiCodeAlt,
    title: "Clean Code Lover",
  },
  {
    id: 2,
    icon: FaReact,
    title: "React.js Enthusiast",
  },
  {
    id: 3,
    icon: BiBug,
    title: "Bug Fixing Addict",
  },
  {
    id: 4,
    icon: BiCoffee,
    title: "Powered by Coffee",
  },
  {
    id: 5,
    icon: FaLaptopCode,
    title: "Frontend Focused",
  },
  {
    id: 6,
    icon: FaKeyboard,
    title: "Code Every Day",
  },
  {
    id: 7,
    icon: FaLightbulb,
    title: "Problem Solver",
  },
  {
    id: 8,
    icon: BiRocket,
    title: "Always Learning",
  },
  {
    id: 9,
    icon: FaMobileAlt,
    title: "Responsive Design Fan",
  },
  {
    id: 10,
    icon: BiTime,
    title: "Late-Night Coder",
  },
];
  return (
    <div className="flex flex-row overflow-y-hidden overflow-x-scroll custom-scroll pb-5">
      {FunFactData.map((FunFactItem) => (
        <FunFactCard
          key={FunFactItem.id}
          icon={FunFactItem.icon}
          title={FunFactItem.title}
        />
      ))}
    </div>
  );
};

export default FunFact;
