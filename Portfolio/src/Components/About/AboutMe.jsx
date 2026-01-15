import React from "react";

const AboutMe = () => {
  let title = `Hello! I'm Syed Ahsan Ullah`;
  let aboutMe = `Passionate Frontend Developer specializing in React.js and modern web technologies. Currently pursuing BS Software Engineering (7th semester) at Virtual University of Pakistan with hands-on experience building production-ready web applications. Strong problem-solver with expertise in creating responsive, user-friendly interfaces and a commitment to continuous learning in the ever-evolving web development landscape.`;

  return (
    <div className="flex flex-col md:flex-row pb-6 w-full">
      {/* LEFT COLUMN */}
      <div className="md:w-1/2 py-10 text-zinc-400 px-6 borderRight flex flex-col">
        <h2 className="font-semibold mb-1 text-lg">{title}</h2>
        <p className="text-base leading-6">{aboutMe}</p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="md:w-1/2 px-3 md:p-6">
        <ul className="w-full">
          <li className="flex w-full items-center justify-between text-zinc-400 text-base font-normal borderBottom py-2">
            <span className="bg-designColor text-black uppercase px-4 py-[1px] rounded-md">
              status:
            </span>
            <span>Available for Internship</span>
          </li>
          <li className="flex w-full items-center justify-between text-zinc-400 text-base font-normal borderBottom py-2">
            <span className="bg-designColor text-black uppercase px-4 py-[1px] rounded-md">
              Age:
            </span>
            <span>21</span>
          </li>
          <li className="flex w-full items-center justify-between text-zinc-400 text-base font-normal borderBottom py-2">
            <span className="bg-designColor text-black uppercase px-4 py-[1px] rounded-md">
              Residence:
            </span>
            <span>Pakistan</span>
          </li>
          
          <li className="flex w-full items-center justify-between text-zinc-400 text-base font-normal borderBottom py-2">
            <span className="bg-designColor text-black uppercase px-4 py-[1px] rounded-md">
              Address:
            </span>
            <span>Ali Town, Lahore, Pakistan</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
