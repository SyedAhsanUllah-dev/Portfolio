import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profileImg from "../../assets/Images/ProfileImg.png";
import Typewriter from "typewriter-effect";

// Icons
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { BsCloudLightningFill } from "react-icons/bs";
const Left = ({handleShowPage}) => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Front-End Developer", "ReactJS Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full md:w-5/12 h-full rounded-2xl bg-bodyColor shadow-testShadow  z-10">
      {/* Profile Img */}
      <div className="w-full md:h-3/5 object-contain">
        <img
          src='https://avatars.githubusercontent.com/u/254905093?v=4'
          alt="profile Picture"
          className="w-full h-full rounded-2xl object-scale-down borderBottom border-b-5 borderRight border-r-2"
          loading="priority"
        />
      </div>
      <div className="w-full h-2/5 ">
        {/* Contain the intro */}
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-center text-4xl font-semibold">
            Syed Ahsan Ullah
          </h1>

          <p className="text-base text-designColor font-semibold tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2 cursor-pointer">
           
           <a href="https://github.com/syedahsanullah-dev" target="_blank" rel='noopener noreferrer' > 
           <span className="hover:text-designColor duration-300 hover:scale-125 cursor-pointer text-xl">
              <FaGithub />
            </span>
              </a>
           <a href="https://www.linkedin.com/in/syed-ahsan-ullah-dev" target="_blank" rel='noopener noreferrer' > 

            <span className="hover:scale-125 hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </span>
             </a>
           <a href="" target="_blank" rel='noopener noreferrer' > 

            <span className="hover:scale-125 hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaYoutube />
            </span>
             </a>
           <a href="" target="_blank" rel='noopener noreferrer' > 

            <span className="hover:scale-125 hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaFacebook />
            </span>
             </a>
           <a href="" target="_blank" rel='noopener noreferrer' > 

            <span className="hover:scale-125 hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span>
             </a>
           <a href="https://sites.google.com/view/syedahsanullah/home" target="_blank" rel='noopener noreferrer' > 

            <span className="hover:scale-125 hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGoogle />
            </span>
             </a>
           <a href="mailto:syedahsanullah.dev@gmail.com"  rel='noopener noreferrer' > 

            <span className="hover:scale-125 hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span>
             </a>

          </div>
        </div>
          {/* Buttons */}
        <div className="flex h-12 ">
          <a
            href=""
            target="_blank"
            className="w-1/2 h-full borderRight borderTop text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
          >
            <button className="w-full h-full flex justify-center items-center gap-2 cursor-pointer hover:-translate-y-1 duration-300">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <a
             onClick={() => handleShowPage("Contact")}
            className="w-1/2 cursor-pointer h-full flex justify-center items-center gap-2 borderTop text-sm tracking-wide uppercase hover:text-designColor duration-300"
          >
            <button
            
             className="w-full h-full flex justify-center items-center gap-2 cursor-pointer  hover:-translate-y-1 duration-300">
              Contact me <FiSend />
            </button>
          </a>
        </div>
      
      </div>
    </div>
  );
};

export default Left;
