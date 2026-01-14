 <div className="md:hidden flex mt-2 bg-transparent gap-1">
          <div
            onClick={handleNav}
            className="px-3 h-20 bg-bodyColor transition-all cursor-pointer duration-200 group rounded-3xl flex justify-center items-center"
          >
            {/* Menu Button */}
            <div
              onClick={handleNav}
              className="flex w-full flex-col gap-1.5 overflow-hidden "
            >
              <span className="w-8 h-0.5 bg-textColor inline-block -translate-x-3 transition-transform group-hover:translate-x-0  group-hover:bg-designColor duration-300"></span>
              <span className="w-8 h-0.5 bg-textColor inline-block -translate-x-2 transition-transform group-hover:translate-x-0  group-hover:bg-designColor duration-400"></span>
              <span className="w-8 h-0.5 bg-textColor inline-block -translate-x-4  transition-transform group-hover:translate-x-0 group-hover:bg-designColor duration-300"></span>
            </div>
          </div>

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