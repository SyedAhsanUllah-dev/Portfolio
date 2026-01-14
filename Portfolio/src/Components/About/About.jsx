import React from "react";
import Title from "../Elements/Title";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import FunFact from "./FunFact";

const About = () => {
  return (
    <section id="about" className="w-full grid">
      <Title title={"About"} subTitle={"Me"} />

      <AboutMe />

      <Title title={"My"} subTitle={"Services"} />
      <MyServices />
      <Title title={"Fun"} subTitle={"Facts"} />
      <FunFact />
    </section>
  );
};

export default About;
