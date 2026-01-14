import React from "react";
import ProjectCard from "./ProjectCard";
import Title from "../Elements/Title";
import ByteBuy from "../../assets/ProjectImg/ByteBuy E Commerce/ByteBuy.webp";
import BankWebApp from "../../assets/ProjectImg/BankingWebApp/BankingWebApp.webp";
import ResumeTitle from "../Resume/ResumeTitle";
import {
  FaExternalLinkAlt,
  FaLink,
  FaOpenid,
  FaStore,
  FaUikit,
} from "react-icons/fa";
const Project = () => {
  return (
    <div>
      <Title title="Recent" subTitle={"Projects"} />
      <div className="w-full px-6 grid">
        <div className="px-6">
          <div id="bytebuy" className="flex flex-col gap-2">
            <div>
              <h1 className="font-titleFont font-bold text-base cursor-pointer capitalize text-textColor relative z-10 px-6 py-3 borderBottom group">
                <span className="text-designColor group inline-flex">
                  <FaStore />
                </span>{" "}
                E-Commerce Store
                <span className=" w-8 h-8 bg-graident-to-t from-designColor to-gray-600 inline-block rounded-full absolute left-2 top-2.5 opacity-10 -z-10  -translate-x-0 group-hover:translate-x-2  bg-linear-0 duration-500"></span>
                <span className="inline-flex ml-2 group-hover:text-designColor">
                  <a
                    href="https://bytebuy-rho.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </span>
              </h1>
              <p className="mt-2 text-zinc-500 hover:text-zinc-50 duration-200">
                ByteBuy is a live e-commerce web application that showcases a
                fully functional online store built using modern frontend
                technologies like React and Tailwind CSS. It features a dynamic
                product browsing experience, allowing users to explore items and
                interact with the UI smoothly. The project demonstrates
                essential e-commerce functionality such as product listings and
                responsive design, making it ideal for portfolio presentation.
                It’s deployed on Vercel and accessible via a live demo link,
                showing real deployment workflow skills. This project highlights
                your ability to build real-world web applications from concept
                to deployment.
              </p>
            </div>
            <div className="flex z-25 md:-mt-25 ">
              <img
                src={ByteBuy}
                alt="ByteBuy"
                className="scale-100 md:scale-90 hover:scale-100 duration-300 object-contain opacity-80 hover:opacity-100"
              />
            </div>
          </div>
        </div>
        <div id="BankingApp" className="flex flex-col gap-2">
          <div>
            <h1 className="font-titleFont font-bold text-base cursor-pointer capitalize text-textColor relative z-10 px-6 py-3 borderBottom group">
              <span className="text-designColor group inline-flex">
                <FaUikit />
              </span>{" "}
              Banking Web App{" "}
              <span className=" w-8 h-8 bg-graident-to-t from-designColor to-gray-600 inline-block rounded-full absolute left-2 top-2.5 opacity-10 -z-10  -translate-x-0 group-hover:translate-x-2  bg-linear-0 duration-500"></span>
              <span className="inline-flex ml-2 group-hover:text-designColor">
                <a
                  href="https://banking-web-app-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </span>
            </h1>
            <p className="mt-2 text-zinc-500 hover:text-zinc-50 duration-200">
              The Banking Web App is a demo financial application built using
              JavaScript (OOP approach) and Tailwind CSS. It allows users to
              manage accounts, view balances, and track transaction history
              through an interactive and responsive interface. The app
              emphasizes object-oriented programming concepts to structure logic
              for accounts, transactions, and user interactions. With a clean UI
              built in Tailwind CSS, it demonstrates practical skills in
              building dynamic web applications without frameworks{" "}
            </p>
          </div>
          <div className="flex z-25">
            <img
              src={BankWebApp}
              alt="Banking Web App"
              className="scale-90 hover:scale-100 duration-300 object-contain opacity-80 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
