import React from "react";
import ResumeTitle from "./ResumeTitle";
import {
  FaBrain,
  FaCode,
  FaFlag,
  FaPaintBrush,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNpm,
  FaStripe,
} from "react-icons/fa";
import { 
  BiCodeAlt, 
  BiPaint, 
  BiLogoJavascript, 
  BiLogoTailwindCss, 
  BiServer, 
  BiLogoFirebase, 
  BiLogoMongodb, 
  BiCodeBlock,
  BiBoltCircle
} from "react-icons/bi";

const Skills = () => {
  // Your New Data Integrated
  const skillsData = {
    frontend: [
      { name: "React.js", level: 85, icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", level: 80, icon: BiLogoJavascript, color: "#F7DF1E" },
      { name: "HTML5", level: 95, icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", level: 85, icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", level: 90, icon: BiLogoTailwindCss, color: "#06B6D4" },
    ],
    backend: [
      { name: "Firebase", level: 40, icon: BiLogoFirebase, color: "#FFCA28" },
      { name: "Express.js", level: 20, icon: BiServer, color: "#FFFFFF" },
      { name: "Node.js", level: 20, icon: FaNode, color: "#339933" },
      // { name: "MongoDB", level: 60, icon: BiLogoMongodb, color: "#47A248" },
    ],
  };

  const knowledge = [
    { id: 1, icon: BiLogoJavascript, title: "Modern JavaScript" },
    { id: 2, icon: FaReact, title: "React Ecosystem" },
    { id: 3, icon: BiCodeAlt, title: "Semantic HTML" },
    { id: 4, icon: BiPaint, title: "Responsive Styling" },
    { id: 5, icon: BiServer, title: "API Development" },
    { id: 6, icon: BiLogoFirebase, title: "Realtime Database" },
    { id: 7, icon: FaGithub, title: "Version Control" },
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
          {knowledge.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 text-zinc-400 text-sm"
            >
              <span className="text-designColor text-lg">
                <item.icon />
              </span>
              <span>{item.title}</span>
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
        {/* CODING SECTION - Mapping from your Data */}
        <ResumeTitle
          ResumeIcon={<FaCode className="scale-125 mr-0.5" />}
          title="CODING"
        />
        <div className="py-4">
          {/* Frontend Skills */}
          {skillsData.frontend.map((skill, index) => (
            <SkillProgress key={index} skill={skill.name} progress={skill.level} />
          ))}
          
          {/* Backend Skills */}
          {skillsData.backend.map((skill, index) => (
            <SkillProgress key={index} skill={skill.name} progress={skill.level} />
          ))}
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

// Reusable progress bar component
const SkillProgress = ({ skill, progress }) => (
  <div className="py-3 border-b-[1px] border-zinc-800">
    <div className="flex justify-between items-center mb-1">
      <p className="text-base text-textColor">{skill}</p>
      <span className="text-xs text-zinc-500">{progress}%</span>
    </div>
    <div className="w-full bg-zinc-600 h-1 relative rounded">
      <span
        className="h-full absolute top-0 left-0 bg-designColor rounded transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></span>
    </div>
  </div>
);

export default Skills;