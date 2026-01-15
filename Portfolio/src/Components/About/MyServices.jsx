import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { FaBlog, FaLaptopCode, FaPaintBrush, FaShoppingCart, FaUniversity } from "react-icons/fa";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: BiCodeAlt,
      title: "Frontend Web Development",
      description:
      "Building modern, responsive websites using React.js, JavaScript, and Tailwind CSS. Focused on clean UI, performance, and reusable components."
    },
    {
      id: 2,
      icon: FaShoppingCart,
      title: "E-commerce Development",
      description:
      "Developing complete e-commerce websites with product listing, cart functionality, checkout flow, and payment integration.",
    },
    {
      id: 3,
      icon: FaLaptopCode,
      title: "Web Application Development",
      description:
      "Creating custom web applications with features like user dashboards, data management, and interactive UI.",
    },
    {
      id: 3,
      icon: FaPaintBrush,
      title: "UI/UX Implementation",
      description:
      "Converting designs from Figma to fully functional, pixel-perfect web interfaces with smooth animations.",
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
