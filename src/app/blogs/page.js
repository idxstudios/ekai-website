import React from "react";
import elevate from "../../assets/elevateCard.png";
import videothumb from "../../assets/videothumb.jpg";
import Image from "next/image";
import "./style.css";
const blogData = [
  {
    id: 1,
    header:`AI {You} for the matters that don't need REAL YOU`,
    imagesrc: elevate,
    para: `Imagine a world where your team's productivity isn't hindered by time zones, scattered information, or constant interruptions. A world where you can focus on what truly matters without the constant interruptions of the digital age.`,
    creator: "Ashutosh Tiwari",
    url: "/blogs/enableAI"
  },
  {
    id: 2,
    header: `Building Ekai: Revolutionizing Productivity with AI in a Global Team`,
    imagesrc: videothumb,
    para: `In early 2023, I first connected with Ashutosh Tiwari, a close friend of my elder brother and now co-founder and CEO at Ekai, while I was exploring new opportunities and he was thriving at Coinbase.`,
    creator: "Gaurav Agrawal",
    url: "/blogs/buildingEkai"
  },
];

const page = () => {
  return (
    <div>
      <h1 className="text-4xl black text-center font-bold my-5">
        {`What's new at Ekai`}
      </h1>

      <div className="grid grid-cols-1 lg:mx-20 md:mx-5 sm:mx-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-20 text-center">
        {blogData.map((blog) => (
          <a key={blog.id} href={blog.url}>
          <div  className="p-5 my-5 hover:animate-up-down blog" >
            <div className="pb-1">
              <img
                loading="eager"
                priority={true}
                className="img m-auto w-full"
                src="https://media.licdn.com/dms/image/v2/D5612AQEXnxrZx2DYmQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1722273329594?e=1735171200&v=beta&t=iUPz3TWmapDdcYPg_ye7Lw7TByw47qi_9Pz5k5yASzg"
                alt="blogimage"
              />
            </div>
            <div className="img m-auto">
              <div className="py-2">
                <h1>{blog.header}</h1>
              </div>
              <div>
                <h3>{blog.para}</h3>
              </div>
              <div className=" my-3">
                {/* <div className="profile rounded">
                  {blog.creator.slice(0, 1)}
                </div> */}
                <p className="text-center"> ~{blog.creator}</p>
              </div>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default page;
