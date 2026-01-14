import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { FaBlog, FaPaintBrush, FaShoppingCart, FaUniversity } from "react-icons/fa";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: BiCodeAlt,
      title: "Frontend Web Development",
      description:
        "I build modern, responsive websites using JavaScript, React.js, and Tailwind CSS. Focused on clean UI, performance, and reusable components.",
    },
    {
      id: 2,
      icon: FaShoppingCart,
      title: "E-commerce Website Development",
      description:
        "Developed a complete demo e-commerce website with product listing, cart functionality, checkout flow, and responsive design.",
    },
    {
      id: 3,
      icon: FaUniversity,
      title: "Banking Application",
      description:
        "Built a banking app with features like user dashboard, balance display, transaction history, and interactive UI using React.",
    },
    {
      id: 3,
      icon: FaBlog,
      title: "Blog Website",
      description:
        "Developed a complete demo Blogging website with Post listing, Articles functionality, Latest flow, and responsive design.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      {servicesData.map((service) => (
        <ServicesCard
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Services;
