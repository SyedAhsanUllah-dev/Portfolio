import React from "react";
import Title from "../Elements/Title";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
const Resume = () => {
  return (
    <section id="resume" className="w-full ">
      <Title title={"My"} subTitle={"Resume"} />
    
      <div>
        {/* <Title title={"My"} subTitle={"Skills"} /> */}
        <Skills />
      </div>
        <div className="w-full grid grid-cols-9 px-6">
       <Education />
        <div className="w-full h-full flex justify-center items-center grid-cols-1">
          <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
        </div>
         <Experience />
      </div>
    </section>
  );
};

export default Resume;
