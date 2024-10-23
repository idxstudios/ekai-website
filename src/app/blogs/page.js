import React from "react";
import elevate from "../../assets/elevateCard.png";
import videothumb from '../../assets/videothumb.jpg'
import Image from "next/image";
import './style.css';
const blogData = [
  {
    header:
      "40+ AI prompt examples for different department use cases in an organization",
    imagesrc: elevate,
    para: "Make the most of AI by exploring 40 different prompting examples fit for a variety of use cases and departments, like marketing, sales, finance, operations, and more.",
    creator: "Anuja",
  },
  {
    header:
      "A complete guide to generative AI agents in 2024",
    imagesrc: videothumb,
    para: "Discover what you need to know about generative AI agents in 2024, along with their capabilities, applications, and future prospects.",
    creator: "Anuja",
  },
  {
    header:
      "Glean and Miro partner to bring contextual enterprise knowledge directly into Miro’s Innovation Workspace",
    imagesrc: elevate,
    para: "Glean in Miro brings Glean's Work AI platform directly into Miro's Innovation Workspace, streamlining the brainstorming process and enhancing productivity.",
    creator: "Anuja",
  },
  {
    header:
      "40+ AI prompt examples for different department use cases in an organization",
    imagesrc: elevate,
    para: "Make the most of AI by exploring 40 different prompting examples fit for a variety of use cases and departments, like marketing, sales, finance, operations, and more.",
    creator: "Anuja",
  },
  {
    header:
      "40+ AI prompt examples for different department use cases in an organization",
    imagesrc: elevate,
    para: "Make the most of AI by exploring 40 different prompting examples fit for a variety of use cases and departments, like marketing, sales, finance, operations, and more.",
    creator: "Anuja",
  },
];

const page = () => {
  return (
    <div>
      <h1 className="text-4xl black text-center font-bold my-5">
        What's new at Ekai
      </h1>

      <div className="grid grid-cols-1 lg:mx-20 md:mx-5 sm:mx-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-20">
        {blogData.map((blog) => (
          <div className="p-5 my-5 hover:animate-up-down blog">
            <div className="">
              <Image className="img m-auto w-full" src={blog.imagesrc} alt="blogimage"/>
            </div>
            <div className="img m-auto">
              <div className="py-2">
                <h1>{blog.header}</h1>
              </div>
              <div>
                <h3>{blog.para}</h3>
              </div>
              <div className="flex justify-start gap-3 my-3">
                <div className="profile rounded">
                {blog.creator.slice(0,1)}
                </div>
                <p>{blog.creator}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
