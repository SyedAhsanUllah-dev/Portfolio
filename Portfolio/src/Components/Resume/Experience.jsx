import {
  FaBriefcase,
  FaLaptopCode,
  FaReact,
  FaServer,
} from "react-icons/fa";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      startDate: "2023",
      endDate: "Present",
      current: true,
      type: "Freelance",
      description: "Working on various web development projects, building modern responsive websites and web applications for clients using React.js, JavaScript, and modern web technologies.",
      responsibilities: [
        "Develop responsive web applications using React.js and Tailwind CSS",
        "Implement user authentication and database integration with Firebase",
        "Create RESTful APIs and integrate third-party services",
        "Collaborate with clients to understand requirements and deliver solutions",
        "Maintain and update existing web applications",
        "Optimize website performance and ensure cross-browser compatibility"
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Firebase", "Node.js", "Git"],
      achievements: [
        "Successfully delivered multiple projects on time",
        "Built strong client relationships through effective communication",
        "Continuously expanding technical skills through real-world projects"
      ]
    }
  ];

  return (
    <div className="w-full col-span-full md:col-span-4 flex flex-col px-6">
      <div>
        <h1 className="font-titleFont font-bold text-base cursor-pointer capitalize text-textColor relative z-10 px-6 py-3 borderBottom group">
          <span className="text-designColor group">
            <FaBriefcase className="inline-flex" />
          </span>{" "}
          Experience{" "}
          <span className="w-8 h-8 bg-gradient-to-t from-designColor to-gray-600 inline-block rounded-full absolute left-2 top-2.5 opacity-10 -z-10 -translate-x-0 group-hover:translate-x-2 duration-500">
          </span>
        </h1>
      </div>
      <div className="mt-6 flex flex-col gap-8">
        {experienceData.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ item }) => {
  const { title, company, location, startDate, endDate, description, responsibilities, technologies, current } = item;
  
  const isCurrent = current || endDate === "Present";

  return (
    <div className="relative flex flex-col gap-4 p-6 border border-zinc-800 rounded-xl bg-bodyColor hover:border-designColor transition-all duration-300">
      {/* Date & Type Badge */}
      <div className="flex justify-between items-center">
        <span
          className={`w-fit px-4 py-[2px] text-sm font-semibold rounded-full border
            ${isCurrent ? "border-designColor text-designColor" : "border-zinc-600 text-zinc-400"}`}
        >
          {startDate} – {endDate}
        </span>
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
            {item.type}
        </span>
      </div>

      {/* Title & Company */}
      <div>
        <h3 className="text-xl font-titleFont font-semibold text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-designColor font-medium mt-1">
          {company} <span className="text-zinc-500">· {location}</span>
        </p>
      </div>

      {/* Description */}
      <p className="text-base text-gray-400 leading-relaxed italic">
        {description}
      </p>

      {/* Responsibilities List */}
      {responsibilities?.length > 0 && (
        <ul className="flex flex-col gap-2 list-disc list-inside text-sm text-gray-400">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="leading-relaxed">
              <span className="relative -left-2">{resp}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Technologies Badges */}
      {technologies?.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-zinc-800 text-gray-300 border border-zinc-700 hover:border-designColor transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;