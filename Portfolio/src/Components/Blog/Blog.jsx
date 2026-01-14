import React from "react";
import Title from "../Elements/Title";

const Blog = () => {
    const blogData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    title: "Web Dev",
    subTitle: "Modern React & Tailwind Tips",
    category: "Frontend Development",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    title: "JavaScript",
    subTitle: "Write Clean & Scalable Code",
    category: "Programming",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    title: "UI/UX",
    subTitle: "Design Better User Experiences",
    category: "Design",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    title: "Performance",
    subTitle: "Optimize React Apps",
    category: "Optimization",
  },
];

  return (
   <div>
      <Title title={"Latest"} subTitle={"Posts"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogData.map((item) => (
          <div key={item.id} className="px-6">
            <BlogCard
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
              category={item.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ image, title, subTitle, category }) => {
  return (
    <div className="py-6 flex flex-col gap-2 items-center justify-center border-b-[1px] border-b-zinc-800 group">
      <div className="w-full h-full mb-2 overflow-hidden relative cursor-pointer">
        <img src={image} alt={title}   className="w-full h-60 object-cover group-hover:scale-110 duration-300"
 />
        {/* hover effect */}
        <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-green-600 via-green-600 to-green-200 opacity-20"></div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-designColor border-[1px] border-designColor px-2">
          {title}
        </span>
        <h2 className="text-base text-center font-semibold font-titleFont text-[#ccc] group-hover:text-designColor duration-300">
          {subTitle}
        </h2>
        <p className="text-base text-gray-400 -mt-1">{category}</p>
      </div>
    </div>
  );
};

export default Blog;
