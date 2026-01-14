import React from "react";

const AboutMe = () => {
  let title = `Hello! I'm Ahsan Gillani`;
  let aboutMe = `Web designer from Pakistan, Lahore. I am a beginner in website design and building, also good at ReactJS.`;

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
              Age:
            </span>
            <span>24</span>
          </li>
          <li className="flex w-full items-center justify-between text-zinc-400 text-base font-normal borderBottom py-2">
            <span className="bg-designColor text-black uppercase px-4 py-[1px] rounded-md">
              Residence:
            </span>
            <span>USA</span>
          </li>
          <li className="flex w-full items-center justify-between text-zinc-400 text-base font-normal borderBottom py-2">
            <span className="bg-designColor text-black uppercase px-4 py-[1px] rounded-md">
              Freelance:
            </span>
            <span>Avaliable</span>
          </li>
          <li className="flex w-full items-center justify-between text-zinc-400 text-base font-normal borderBottom py-2">
            <span className="bg-designColor text-black uppercase px-4 py-[1px] rounded-md">
              Address:
            </span>
            <span>Lahore, Pakistan</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
