import React from "react";
import elevate from "../../assets/elevateCard.png";
import videothumb from "../../assets/videothumb.jpg";
import ashutosh from "../../assets/ashutosh.jpg";
import gaurav from "../../assets/gaurav.jpg";
import Image from "next/image";
import "./style.css";
const blogData = [
  {
    id: 2,
    header: `Building Ekai: Revolutionizing Productivity with AI in a Global Team`,
    imagesrc: "https://i.ibb.co/ZYn2KF6/realtime.png",
    para: `In early 2023, I first connected with Ashutosh Tiwari, a close friend of my elder brother and now co-founder and CEO at Ekai, while I was exploring new opportunities and he was thriving at Coinbase.`,
    creator: "Gaurav Agrawal",
    url: "/blogs/buildingEkai",
    profileUrl: gaurav,
    date: "Jul 12, 2024",
  },
  {
    id: 1,
    header: `AI {You} for the matters that don't need REAL YOU`,
    // imagesrc: "https://i.ibb.co/Z8LHXRk/b2.png",
    imagesrc: "https://i.ibb.co/XVZgw8d/compl-Updated.png",
    para: `Imagine a world where your team's productivity isn't hindered by time zones, scattered information, or constant interruptions. A world where you can focus on what truly matters without the constant interruptions of the digital age.`,
    creator: "Ashutosh Tiwari",
    url: "/blogs/enableAI",
    profileUrl: ashutosh,
    date: "Jul 29, 2024",
  },
];

const page = () => {
  return (
    <div>
      <h1 className="text-5xl text-black-500 text-center  font-bold mt-5">
        {`What's new at Ekai`}
      </h1>

      <div className="mt-5 mb-20 grid grid-cols-1 lg:mx-20 lg:px-10 md:mx-5 sm:mx-2  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {blogData.map((blog) => (
          <div key={blog.id} className="p-5 my-5 blog lg:px-30 gap-5">
            <div className=" m-auto">
              <img
                className="img m-auto w-full"
                src={blog.imagesrc}
                alt="blogimage"
              />
            </div>
            <div className="p-4 flex flex-col justify-center items-center">
              <div className="my-auto ">
                <div className="py-2">
                  <h1 className="text-3xl">{blog.header}</h1>
                </div>
                <div>
                  <h3 className="text-xl">{blog.para}</h3>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  <div className="flex my-3 ">
                    <div className="flex">
                      <div className="profile rounded">
                        <Image
                          className="profile"
                          src={blog.profileUrl}
                          alt="profile"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-center">{blog.creator}</p>
                        <p className="text-center">{blog.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end lg:justify-center my-auto py-auto">
                    <a href={blog.url}>
                      <div className="flex btnrm text-center my-auto">
                        <span className="m-auto">Read More</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
