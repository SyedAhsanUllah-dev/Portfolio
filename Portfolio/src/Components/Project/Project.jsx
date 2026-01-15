import React from "react";
import Title from "../Elements/Title";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaStore,
  FaUikit,
  FaLaptopCode,
  FaCode,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

const Project = () => {
  const projectsData = [
    {
      id: 1,
      title: "ByteBuy E-Commerce Platform",
      category: "Full Stack",
      shortDescription: "Full-featured e-commerce web application with modern shopping cart functionality, user authentication, and payment integration.",
      thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      technologies: ["React.js", "Tailwind CSS", "Firebase", "Zustand", "Stripe"],
      links: {
        live: "https://bytebuy-rho.vercel.app/",
        github: "https://github.com/syedahsanullah-dev/ByteBuy-main",
      },
      role: "Full Stack Developer",
      year: 2025,
      icon: <FaStore />,
    },
    {
      id: 2,
      title: "ProBank - Banking App",
      category: "Object-Oriented Programming",
      shortDescription: "Feature-rich banking application demonstrating OOP principles with real-time transaction management and user authentication.",
      thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
      technologies: ["JavaScript", "OOP", "REST API", "MockAPI", "Tailwind"],
      links: {
        live: "https://mybankingwebapp.vercel.app/",
        github: "https://github.com/syedahsanullah-dev/BankingWebApp-main",
      },
      role: "Frontend Developer",
      year: 2025,
      icon: <FaUikit />,
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      category: "Frontend Design",
      shortDescription: "Interactive portfolio showcasing projects and skills with smooth animations and modern design aesthetics.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["React.js", "Framer Motion", "EmailJS", "Tailwind CSS"],
      links: {
        live: "https://syedahsanullah.vercel.app/",
        github: "https://github.com/syedahsanullah-dev/Portfolio",
      },
      role: "Frontend Developer & Designer",
      year: 2025,
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <section className="py-10">
      <Title title="Recent" subTitle={"Projects"} />
      
      <div className="w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-designColor/50 transition-all duration-500 group"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden h-64">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-500 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  className="p-2 bg-zinc-900/80 rounded-full text-zinc-300 hover:text-designColor transition-colors"
                >
                  <FaGithub size={18} />
                </a>
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  className="p-2 bg-zinc-900/80 rounded-full text-zinc-300 hover:text-designColor transition-colors"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
              <div className="absolute bottom-4 left-4">
                 <span className="px-3 py-1 bg-designColor text-black text-xs font-bold rounded-md uppercase">
                   {project.category}
                 </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-designColor text-xl">
                  {project.icon}
                </span>
                <h3 className="text-xl font-bold text-textColor group-hover:text-designColor transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Meta Info */}
              <div className="flex gap-4 text-xs text-zinc-500 mb-4 font-medium">
                <span className="flex items-center gap-1">
                  <FaUserTie className="text-designColor" /> {project.role}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-designColor" /> {project.year}
                </span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.shortDescription}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.slice(0, 5).map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-[10px] px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700 group-hover:border-zinc-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;