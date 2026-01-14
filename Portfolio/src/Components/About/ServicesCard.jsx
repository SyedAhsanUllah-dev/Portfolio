import React from "react";

const ServicesCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="py-8 px-6 flex flex-col items-center gap-2 borderRight borderBottom text-center">
      <span className="text-4xl text-designColor  mb-2">
        <Icon />
      </span>

      <h2 className="text-lg font-titleFont font-semibold text-white">
        {title}
      </h2>

      <p className="text-base text-center text-zinc-400 px-6 leading-6">
        {description}
      </p>
    </div>
  );
};

export default ServicesCard;
