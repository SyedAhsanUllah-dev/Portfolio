import {
  FaGraduationCap,
} from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      year: "2024 – Present",
      title: "Frontend Web Development",
      institute: "Self Learning / Online Platforms",
      description:
        "Learning modern frontend development using JavaScript, React.js, and Tailwind CSS. Built real-world projects including a demo banking app and an e-commerce website.",
    },
    {
      id: 2,
      year: "2023 – 2024",
      title: "JavaScript & React Fundamentals",
      institute: "Online Courses & Practice",
      description:
        "Focused on JavaScript fundamentals, React components, hooks, state management, and building reusable UI components.",
    },
    {
      id: 3,
      year: "2022 – 2023",
      title: "Intermediate in Computer Science",
      institute: "College / Board of Intermediate Education",
      description:
        "Studied computer science basics, programming logic, problem-solving techniques, and foundational IT concepts.",
    },
    {
      id: 4,
      year: "2020 – 2022",
      title: "Matriculation (Science)",
      institute: "Secondary School Education Board",
      description:
        "Completed secondary education with a focus on science subjects, building interest in technology and software development.",
    },
  ];

  return (
    <div className="w-full col-span-full md:col-span-4 flex flex-col px-6">
      <div>
        <h1 className="font-titleFont font-bold text-base cursor-pointer capitalize text-textColor relative z-10 px-6 py-3 borderBottom group">
          <span className="text-designColor group">
            <FaGraduationCap className="inline-flex" />
          </span>{" "}
          Education{" "}
          <span className=" w-8 h-8 bg-graident-to-t from-designColor to-gray-600 inline-block rounded-full absolute left-2 top-2.5 opacity-10 -z-10  -translate-x-0 group-hover:translate-x-2  bg-linear-0 duration-500">
            {" "}
          </span>
        </h1>
      </div>
      <div>
        <div className="flex flex-col">
          {educationData.map((item) => (
            <EducationCard
              key={item.id}
              year={item.year}
              title={item.title}
              institute={item.institute}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationCard = ({ year, title, institute, description }) => {
  const YearP = year.includes("Present")
    ? "w-fit px-4 text-center border-designColor text-designColor py-[1px] border-1 shadow-lg font-titleFont rounded-sm font-semibold text-sm duration-300 hover:border-white hover:text-white"
    : "w-fit px-4 text-center border-zinc-600 text-zinc-400 py-[1px] border-1 shadow-lg font-titleFont rounded-sm font-semibold text-sm hover:border-zinc-50 hover:text-zinc-50 duration-300 ";

  return (
    <div className="flex flex-col gap-2.5 py-6 borderBottom">
      <h6 className={`${YearP}`}>{year}</h6>

      <h3 className="font-medium text-lg font-titleFont text-gray-200">
        {title}
      </h3>

      <h4 className="text-[#999] text-sm -mt-2">{institute}</h4>

      <p className="text-[#999] text-base pr-10 font-medium">{description}</p>
    </div>
  );
};

export default Education;
