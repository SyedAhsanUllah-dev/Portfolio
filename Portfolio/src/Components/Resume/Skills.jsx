import React from "react";
import ResumeTitle from "./ResumeTitle";
import {
  FaBrain,
  FaCode,
  FaFlag,
  FaPaintBrush,
  FaReact,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
import { BiCodeAlt, BiPaint } from "react-icons/bi";

const Skills = () => {
  const knowledge = [
    { id: 1, icon: FaLaptopCode, title: "JavaScript" },
    { id: 2, icon: FaReact, title: "React.js" },
    { id: 3, icon: BiCodeAlt, title: "HTML & CSS" },
    { id: 4, icon: BiPaint, title: "Tailwind CSS" },
    { id: 5, icon: FaServer, title: "Website Hosting / Backend" },
    { id: 6, icon: FaDatabase, title: "Realtime Database / Firestore" },
    { id: 7, icon: FaMobileAlt, title: "Responsive Design" },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-9 px-6 gap-6">
      {/* Left Section: Design + Knowledge */}
      <div className="flex flex-col gap-6 col-span-4">
        {/* DESIGN */}
        <ResumeTitle ResumeIcon={<FaPaintBrush />} title="DESIGN" />
        <div className="py-4">
          <SkillProgress skill="Web Development" progress={70} />
          <SkillProgress skill="Web Design" progress={50} />
          <SkillProgress skill="UI Design" progress={25} />
        </div>

        {/* KNOWLEDGE */}
        <ResumeTitle ResumeIcon={<FaBrain />} title="KNOWLEDGE" />
        <ul className="flex flex-col gap-3 py-4">
          {knowledge.map((skill) => (
            <li
              key={skill.id}
              className="flex items-center gap-2 text-zinc-400 text-sm"
            >
              <span className="text-designColor text-lg">
                <skill.icon />
              </span>
              <span>{skill.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Center Line */}
      <div className="hidden md:flex justify-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Right Section: Coding + Languages */}
      <div className="flex flex-col gap-6 col-span-4">
        {/* CODING */}
        <ResumeTitle
          ResumeIcon={<FaCode className="scale-125 mr-0.5" />}
          title="CODING"
        />
        <div className="py-4">
          <SkillProgress skill="JavaScript" progress={80} />
          <SkillProgress skill="React.js" progress={70} />
          <SkillProgress skill="TailwindCSS" progress={75} />
          <SkillProgress skill="CSS" progress={80} />
          <SkillProgress skill="HTML" progress={95} />
        </div>

        {/* LANGUAGES */}
        <ResumeTitle ResumeIcon={<FaFlag />} title="LANGUAGES" />
        <div className="py-4">
          <SkillProgress skill="English" progress={75} />
          <SkillProgress skill="Urdu" progress={90} />
        </div>
      </div>
    </div>
  );
};

export default Skills;




// Reusable progress bar component
const SkillProgress = ({ skill, progress }) => (
  <div className="py-3 border-b-[1px] border-zinc-800">
    <p className="text-base text-textColor mb-1">{skill}</p>
    <div className="w-full bg-zinc-600 h-1 relative rounded">
      <span
        className="h-full absolute top-0 left-0 bg-designColor rounded"
        style={{ width: `${progress}%` }}
      ></span>
    </div>
  </div>
);
