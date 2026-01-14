import Left from "./Components/home/Left";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Project from "./Components/Project/Project";
import Blog from "./Components/Blog/Blog.jsx";
import ContactForm from "./Components/Contact/ContactForm";
import Phone from "./Components/Contact/Phone";
const Home = () => {
  // Menu Icons
  const [nav, setNav] = useState(true);
  const [MobNav, setMobNav] = useState(false);
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [project, setProject] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);
  const [call, setCall] = useState(false);

  const handleNav = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  const handleMobNav = () => {
    if (MobNav) {
      setMobNav(false);
    } else {
      setMobNav(true);
    }
  };

  const handleShowPage = (page) => {
    switch (page) {
      case "About":
        setAbout(true);
        setResume(false);
        setProject(false);
        setBlog(false);
        setContact(false);
        setCall(false);
        break;

      case "Resume":
        setAbout(false);
        setResume(true);
        setProject(false);
        setBlog(false);
        setContact(false);
        setCall(false);
        break;

      case "Project":
        setAbout(false);
        setResume(false);
        setProject(true);
        setBlog(false);
        setContact(false);
        setCall(false);
        break;

      case "Blog":
        setAbout(false);
        setResume(false);
        setProject(false);
        setBlog(true);
        setContact(false);
        setCall(false);
        break;

      case "Contact":
        setAbout(false);
        setResume(false);
        setProject(false);
        setBlog(false);
        setContact(true);
        setCall(false);
        break;

      case "Call":
        setAbout(false);
        setResume(false);
        setProject(false);
        setBlog(false);
        setContact(false);
        setCall(true);
        break;

      default:
        // Optional: reset all
        setAbout(true);
        setResume(false);
        setProject(false);
        setBlog(false);
        setContact(false);
        setCall(false);
        break;
    }
  };

  return (
    <div className="flex-col md:mt-0 gap-1 md:flex-row flex items-start justify-between w-[85%] h-[90%] md:h-[85%] bg-transparent text-white z-50">
      <div className="hidden md:flex w-full mt-2 md:mt-0  md:mb-0 md:w-16 md:h-96 bg-transparent  md:flex-col gap-2">
        <div
          onClick={handleNav}
          className="px-3 md:px-0 md:w-full h-20 bg-bodyColor transition-all cursor-pointer duration-200 group rounded-3xl flex justify-center items-center"
        >
          {/* Menu Button */}
          <div
            onClick={handleNav}
            className="flex flex-col gap-1.5 overflow-hidden "
          >
            <span className="w-8 h-0.5 bg-textColor inline-block -translate-x-3 transition-transform group-hover:translate-x-0  group-hover:bg-designColor duration-300"></span>
            <span className="w-8 h-0.5 bg-textColor inline-block -translate-x-2 transition-transform group-hover:translate-x-0  group-hover:bg-designColor duration-400"></span>
            <span className="w-8 h-0.5 bg-textColor inline-block -translate-x-4  transition-transform group-hover:translate-x-0 group-hover:bg-designColor duration-300"></span>
          </div>
        </div>
        {/* Menu Nav */}

        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full md:h-80  bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between cursor-pointer"
            >
              {" "}
              <div className="w-full md:h-80 bg-bodyColor rounded-3xl md:py-6 flex md:flex-col  items-center justify-between cursor-pointer">
                <span
                  onClick={() => handleShowPage("About")}
                  className=" w-full h-6 text-textColor  text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group "
                >
                  <FaUser />
                  <span className="absolute text-black font-medium text-xs uppercase  bg-designColor px-4 py-[1px] rounded-xl left-0 -translate-x-10  opacity-0 group-hover:-translate-x-14 group-hover:opacity-100 duration-300 delay-300 group-hover:delay-0 transition-all z-20">
                    About
                  </span>
                </span>
                <span
                  onClick={() => handleShowPage("Resume")}
                  className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
                >
                  <IoIosPaper />
                  <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 -translate-x-10  opacity-0 group-hover:-translate-x-16 group-hover:opacity-100 duration-300 delay-300 group-hover:delay-0 transition-all z-20">
                    Resume
                  </span>
                </span>
                <span
                  onClick={() => handleShowPage("Project")}
                  className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
                >
                  <MdWork />
                  <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 -translate-x-10  opacity-0 group-hover:-translate-x-20 group-hover:opacity-100 duration-300 delay-300 group-hover:delay-0 transition-all z-20">
                    Projects
                  </span>
                </span>
                <span
                  onClick={() => handleShowPage("Blog")}
                  className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
                >
                  <SiGooglechat />
                  <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 -translate-x-10  opacity-0 group-hover:-translate-x-12 group-hover:opacity-100 duration-300 delay-300 group-hover:delay-0 transition-all z-20">
                    Blog
                  </span>
                </span>
                <span
                  onClick={() => handleShowPage("Contact")}
                  className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
                >
                  <FaEnvelope />
                  <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 -translate-x-10  opacity-0 group-hover:-translate-x-18 group-hover:opacity-100 duration-300 delay-300 group-hover:delay-0 transition-all z-20">
                    Contact
                  </span>
                </span>
                <span
                  onClick={() => handleShowPage("Call")}
                  className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
                >
                  <BsTelephonePlusFill />
                  <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 -translate-x-10 opacity-0 group-hover:-translate-x-12 group-hover:opacity-100 duration-300 delay-300 group-hover:delay-0 transition-all z-20">
                    Call
                  </span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className=" flex flex-col w-full gap-1 md:gap-0 h-fullmd:w-[94%] md:h-full bg-transparent md:flex-row md:items-center">
        {/* Left part start */}

        <Left handleShowPage={handleShowPage} />

        {/* mobileNav */}
        <div className="md:hidden w-full grid grid-cols-6 mt-2 bg-transparent gap-1">
          <div
            onClick={handleMobNav}
            className={`h-20 w-full bg-bodyColor transition-all cursor-pointer duration-200 group rounded-3xl flex justify-center items-center ${
              MobNav ? "col-span-1 " : "col-span-6"
            }`}
          >
            {/* Menu Button */}
            <div
              onClick={handleMobNav}
              className="flex w-fit items-center group justify-center flex-col gap-1.5 overflow-hidden "
            >
              <span
                className={`w-8 h-0.5  inline-block transition-transform ${
                  MobNav
                    ? "translate-x-0 bg-designColor"
                    : "-translate-x-4 bg-textColor "
                }  duration-300 `}
              ></span>
              <span
                className={`w-8 h-0.5  inline-block -translate-x-2 transition-transform ${
                  MobNav
                    ? "translate-x-0 bg-designColor"
                    : "-translate-x-3 bg-textColor "
                }  duration-400 `}
              ></span>
              <span
                className={`w-8 h-0.5 inline-block  transition-transform ${
                  MobNav
                    ? "translate-x-0 bg-designColor"
                    : "-translate-x-5 bg-textColor "
                }  duration-300 `}
              ></span>
            </div>
          </div>
          {MobNav && (
            <div className="w-full col-span-5 bg-bodyColor rounded-3xl flex items-center justify-between cursor-pointer">
              <span
                onClick={() => handleShowPage("About")}
                className={` w-full h-6   text-xl flex items-center justify-center duration-300 cursor-pointer relative group ${
                  about ? "text-designColor" : "text-textColor"
                } `}
              >
                <FaUser />
              </span>
              <span
                onClick={() => handleShowPage("Resume")}
                className={` w-full h-6   text-xl flex items-center justify-center duration-300 cursor-pointer relative group ${
                  resume ? "text-designColor" : "text-textColor"
                } `}
              >
                <IoIosPaper />
              </span>
              <span
                onClick={() => handleShowPage("Project")}
                className={` w-full h-6   text-xl flex items-center justify-center duration-300 cursor-pointer relative group ${
                  project ? "text-designColor" : "text-textColor"
                } `}
              >
                <MdWork />
              </span>
              <span
                onClick={() => handleShowPage("Blog")}
                className={` w-full h-6   text-xl flex items-center justify-center duration-300 cursor-pointer relative group ${
                  blog ? "text-designColor" : "text-textColor"
                } `}
              >
                <SiGooglechat />
              </span>
              <span
                onClick={() => handleShowPage("Contact")}
                className={` w-full h-6   text-xl flex items-center justify-center duration-300 cursor-pointer relative group ${
                  contact ? "text-designColor" : "text-textColor"
                } `}
              >
                <FaEnvelope />
              </span>
              <span
                onClick={() => handleShowPage("Call")}
                className={` w-full h-6   text-xl flex items-center justify-center duration-300 cursor-pointer relative group ${
                  call ? "text-designColor" : "text-textColor"
                } `}
              >
                <BsTelephonePlusFill />
              </span>
            </div>
          )}
        </div>

        {/* Right part start */}
        <div className="w-full md:w-8/12 mb-5  md:h-[95%] rounded-lg bg-bodyColor">
          <div className="w-full md:h-[95%] overflow-y-scroll custom-scroll">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}
            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {project && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Project />
              </motion.div>
            )}
            {blog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Blog />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ContactForm />
              </motion.div>
            )}
            {call && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Phone />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
