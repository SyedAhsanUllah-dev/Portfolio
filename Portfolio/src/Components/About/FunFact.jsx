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
      "id": 1,
      "title": "Clean Code Lover",
      "icon": BiCodeAlt,
      "description": "Always striving to write clean, maintainable code"
    },
    {
      "id": 2,
      "title": "React.js Enthusiast",
      "icon": FaReact,
      "description": "Passionate about building with React ecosystem"
    },
    {
      "id": 3,
      "title": "Bug Fixing Addict",
      "icon": BiBug,
      "description": "Love the challenge of solving complex problems"
    },
    {
      "id": 4,
      "title": "Powered by Coffee",
      "icon": BiCoffee,
      "description": "Coffee fuels my coding sessions"
    },
    {
      "id": 5,
      "title": "Frontend Focused",
      "icon": FaLaptopCode,
      "description": "Specialized in creating beautiful user interfaces"
    },
    {
      "id": 6,
      "title": "Code Every Day",
      "icon": FaKeyboard,
      "description": "Consistent daily coding practice"
    },
    {
      "id": 7,
      "title": "Problem Solver",
      "icon": FaLightbulb,
      "description": "Enjoy tackling challenging coding problems"
    },
    {
      "id": 8,
      "title": "Always Learning",
      "icon": BiRocket,
      "description": "Constantly exploring new technologies"
    },
    {
      "id": 9,
      "title": "Responsive Design Fan",
      "icon": FaMobileAlt,
      "description": "Mobile-first approach in all projects"
    },
    {
      "id": 10,
      "title": "Late-Night Coder",
      "icon": BiTime,
      "description": "Most productive during night hours"
    }
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
