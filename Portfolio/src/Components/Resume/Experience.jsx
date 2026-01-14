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
      year: "2025 – Present",
      title: "Frontend Developer",
      company: "Self Learning / Freelance",
      description:
        "Working on building modern, responsive web applications using React.js, Tailwind CSS, and JavaScript. Created portfolio projects like a demo banking app and an e-commerce website.",
      icon: FaLaptopCode,
    },
    {
      id: 2,
      year: "2024 – 2025",
      title: "React.js Intern",
      company: "Online Projects / Personal",
      description:
        "Gained hands-on experience with React components, hooks, state management, and reusable UI components. Built small web apps for practice and portfolio.",
      icon: FaReact,
    },
    {
      id: 3,
      year: "2023 – 2024",
      title: "Frontend Development Trainee",
      company: "Freelance / Demo Projects",
      description:
        "Learned frontend web development basics and worked on small projects, focusing on HTML, CSS, JavaScript, and responsive design principles.",
      icon: FaBriefcase,
    },
    {
      id: 4,
      year: "2022 – 2023",
      title: "Student Developer",
      company: "College Projects",
      description:
        "Worked on academic projects using HTML, CSS, and JavaScript. Developed understanding of coding best practices and collaborative project work.",
      icon: FaServer,
    },
  ];

  return (
    <div className="w-full col-span-full md:col-span-4 flex flex-col px-6">
      <div>
        <h1 className="font-titleFont font-bold text-base cursor-pointer capitalize text-textColor relative z-10 px-6 py-3 borderBottom group">
          <span className="text-designColor group">
            {" "}
            <FaBriefcase className="inline-flex" />
          </span>{" "}
          Experience{" "}
          <span className=" w-8 h-8 bg-graident-to-t from-designColor to-gray-600 inline-block rounded-full absolute left-2 top-2.5 opacity-10 -z-10  -translate-x-0 group-hover:translate-x-2  bg-linear-0 duration-500">
            {" "}
          </span>
        </h1>
      </div>
      <div>
        <div className="flex flex-col">
          {experienceData.map((item) => (
            <ExperienceCard
              key={item.id}
              year={item.year}
              title={item.title}
              institute={item.company}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ year, title, company, description }) => {
  const YearP = year.includes("Present")
    ? "w-fit px-4 text-center border-designColor text-designColor py-[1px] border-1 shadow-lg font-titleFont rounded-sm font-semibold text-sm duration-300 hover:border-white hover:text-white"
    : "w-fit px-4 text-center border-zinc-600 text-zinc-400 py-[1px] border-1 shadow-lg font-titleFont rounded-sm font-semibold text-sm hover:border-zinc-50 hover:text-zinc-50 duration-300 ";

  return (
    <div className="flex flex-col gap-2.5 py-6 borderBottom">
      <h6 className={`${YearP}`}>{year}</h6>

      <h3 className="font-medium text-lg font-titleFont text-gray-200">
        {title}
      </h3>

      <h4 className="text-[#999] text-sm -mt-2">{company}</h4>

      <p className="text-[#999] text-base pr-10 font-medium">{description}</p>
    </div>
  );
};

export default Experience;
