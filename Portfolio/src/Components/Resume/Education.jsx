import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    // ===== FORMAL / LEARNING JOURNEY =====
    {
      id: 1,
      type: "education",
      title: "Frontend Web Development",
      institute: "Self Learning / Online Platforms",
      location: "Remote",
      startDate: "2024",
      endDate: "Present",
      status: "Ongoing",
      description:
        "Learning modern frontend development using JavaScript, React.js, and Tailwind CSS. Built real-world projects including a demo banking app and an e-commerce website.",
      skills: ["JavaScript", "React.js", "Tailwind CSS", "UI Development"],
    },

    // ===== CERTIFICATIONS =====
    {
      id: 2,
      type: "certification",
      title: "HTML Essentials",
      institute: "Cisco Networking Academy",
      location: "Online",
      issueDate: "August 2025",
      completionDate: "September 2025",
      status: "Completed",
      credentialURL: "https://sites.google.com/view/syedahsanullah/home",
      skills: ["HTML5", "Semantic HTML", "Web Development"],
      category: "Frontend Development",
    },
    {
      id: 3,
      type: "certification",
      title: "CSS Essentials",
      institute: "Cisco Networking Academy",
      location: "Online",
      issueDate: "August 2025",
      completionDate: "Present",
      status: "In Progress",
      credentialURL: "https://sites.google.com/view/syedahsanullah/home",
      skills: ["CSS3", "Responsive Design", "Flexbox", "Grid"],
      category: "Frontend Development",
    },
    {
      id: 4,
      type: "certification",
      title: "JavaScript Web Development",
      institute: "Cisco Networking Academy",
      location: "Online",
      issueDate: "September 2025",
      completionDate: "Present",
      status: "In Progress",
      credentialURL: "https://sites.google.com/view/syedahsanullah/home",
      skills: ["JavaScript", "ES6+", "DOM", "Async Programming"],
      category: "Frontend Development",
    },
    {
      id: 5,
      type: "certification",
      title: "Programming Essentials in C++",
      institute: "Cisco Networking Academy",
      location: "Online",
      issueDate: "January 2023",
      completionDate: "July 2023",
      status: "Completed",
      credentialURL: "https://sites.google.com/view/syedahsanullah/home",
      skills: ["C++", "OOP", "Data Structures", "Algorithms"],
      category: "Programming",
    },
    {
      id: 6,
      type: "certification",
      title: "CCNA: Introduction to Networks",
      institute: "Virtual University Campus, Islamabad",
      location: "Islamabad",
      issueDate: "November 2024",
      completionDate: "December 2024",
      status: "Completed",
      credentialURL: "https://sites.google.com/view/syedahsanullah/home",
      skills: ["Networking", "TCP/IP", "Routing", "Switching"],
      category: "Networking",
    },
    {
      id: 7,
      type: "certification",
      title: "Computer Hardware Basics",
      institute: "Cisco Networking Academy",
      location: "Online",
      issueDate: "May 2025",
      completionDate: "June 2025",
      status: "Completed",
      credentialURL: "https://sites.google.com/view/syedahsanullah/home",
      skills: ["Hardware", "Troubleshooting", "PC Assembly"],
      category: "Hardware",
    },
    {
      id: 8,
      type: "certification",
      title: "SEO (Search Engine Optimization)",
      institute: "DigiSkills.pk (Virtual University)",
      location: "Remote",
      issueDate: "November 2022",
      completionDate: "January 2023",
      status: "Completed",
      credentialURL: "https://sites.google.com/view/syedahsanullah/home",
      skills: ["SEO", "Google Analytics", "Keyword Research", "On-page SEO"],
      category: "Digital Marketing",
    },
    {
      id: 9,
      type: "certification",
      title: "Freelancing",
      institute: "DigiSkills.pk (Virtual University)",
      location: "Remote",
      issueDate: "November 2022",
      completionDate: "January 2023",
      status: "Completed",
      credentialURL: "https://sites.google.com/view/syedahsanullah/home",
      skills: ["Freelancing", "Client Management", "Upwork", "Project Bidding"],
      category: "Business",
    },
    {
      id: 10,
      type: "certification",
      title: "WordPress",
      institute: "DigiSkills.pk (Virtual University)",
      location: "Remote",
      issueDate: "March 2023",
      completionDate: "June 2023",
      status: "Completed",
      credentialURL: "https://sites.google.com/view/syedahsanullah/home",
      skills: ["WordPress", "CMS", "Theme Customization", "Plugins"],
      category: "Web Development",
    },
    {
      id: 11,
      type: "certification",
      title: "Data Analytics & Business Intelligence",
      institute: "DigiSkills.pk (Virtual University)",
      location: "Remote",
      issueDate: "March 2023",
      completionDate: "June 2023",
      status: "Completed",
      credentialURL: "https://sites.google.com/view/syedahsanullah/home",
      skills: ["Data Analysis", "Business Intelligence", "Data Visualization"],
      category: "Data Science",
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
          <span className="w-8 h-8 bg-gradient-to-t from-designColor to-gray-600 inline-block rounded-full absolute left-2 top-2.5 opacity-10 -z-10 -translate-x-0 group-hover:translate-x-2 duration-500">
          </span>
        </h1>
      </div>
      <div className="mt-6 flex flex-col gap-6">
        {educationData.map((item) => (
          <EducationCard
            key={item.id}
            item={item} // Passing the whole object for cleaner access
          />
        ))}
      </div>
    </div>
  );
};

const EducationCard = ({ item }) => {
  // Determine dates based on type
  const displayDate = item.type === "education" 
    ? `${item.startDate} – ${item.endDate}` 
    : `${item.issueDate} – ${item.completionDate}`;

  const isCurrent = item.status === "Ongoing" || item.status === "In Progress" || item.endDate === "Present";

  return (
    <div className="relative flex flex-col gap-4 p-6 border border-zinc-800 rounded-xl bg-bodyColor hover:border-designColor transition-all duration-300">
      {/* Date Badge */}
      <span
        className={`w-fit px-4 py-[2px] text-sm font-semibold rounded-full border
          ${
            isCurrent
              ? "border-designColor text-designColor"
              : "border-zinc-600 text-zinc-400"
          }`}
      >
        {displayDate}
      </span>

      {/* Title */}
      <h3 className="text-xl font-titleFont font-semibold text-gray-100">
        {item.title}
      </h3>

      {/* Institute */}
      <p className="text-sm text-gray-400">
        {item.institute} {item.location && `· ${item.location}`}
      </p>

      {/* Description / Summary */}
      {item.description && (
        <p className="text-base text-gray-400 leading-relaxed">{item.description}</p>
      )}

      {/* Skills / Coursework */}
      {item.skills?.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-2">
            {item.type === "education" ? "Key Skills" : "Topics Covered"}
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-gray-300 hover:bg-designColor hover:text-black transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;