import React from "react";
import "../buildingEkai/styles.css";
import ashutosh from "../../../assets/ashutosh.jpg";
import Image from "next/image";
const Blog1 = () => {
  const src = "https://i.ibb.co/XVZgw8d/compl-Updated.png";
  return (
    <div className="blog-container">
      <h1 className="blog-title">{`AI {You} for the matters that don't need REAL YOU`}</h1>
      <img src={src} alt="Blog image" className="blog-image" />

      <div className="blog-content">
        <p>{`Imagine a world where your team's productivity isn't hindered by time zones, scattered information, or constant interruptions. A world where you can focus on what truly matters without the constant interruptions of the digital age.`}</p>
      </div>
      <div className="blog-subheader">{`The Hidden Cost of Hybrid Work`}</div>

      <div className="blog-content">
        <p>{`In our need to embrace flexibility in the post pandemic world, we've overlooked a critical challenge: the coordination tax. Every day, knowledge workers lose countless hours to:`}</p>
        <ul className="dotted-list">
          <li>{`Waiting for responses across multiple platforms`}</li>
          <li>{`Repeating information that's already documented`}</li>
          <li>{`Navigating misaligned schedules and time zones`}</li>
          <li>{`Interrupting deep work to answer simple queries`}</li>
        </ul>
        <p>{`This isn't just about inconvenience. It's about the erosion of our most valuable resource: time for meaningful work.`}</p>
      </div>

      <div className="blog-subheader">{`Why We Need to Solve This`}</div>

      <div className="blog-content">
        <p>
          {`As Cal Newport wisely said, "If you don't produce, you won't thrive - no matter how skilled or talented you are."`}
        </p>
        <p>
          {`The tools we use today weren't designed for the complexities of hybrid work. They're remnants of an era when everyone worked in the same office, at the same time. But the world has changed, and it's time our tools caught up. `}
        </p>
        <p>
          {`The current state of hybrid work is hindering our ability to produce. We're spending more time managing communication than creating value. This isn't sustainable, and it's certainly not the future of work we envisioned.`}
        </p>
      </div>
      <div className="blog-subheader">{`Introducing Ekai: Your AI Twin`}</div>

      <div className="blog-content">
        <p>{`At Ekai, we believe the solution lies not in more tools, but in smarter integration of the ones we already use. We're creating an AI-powered twin that:`}</p>
        <ul className="dotted-list">
          <li>{`Acts on your behalf across platforms`}</li>
          <li>{`Provides instant access to critical information`}</li>
          <li>{`Manages your schedule and communications`}</li>
          <li>{`Helps you communicate better with well written documents and messages.`}</li>
        </ul>
        <p>{` Imagine an assistant that knows your work style, understands your priorities, and ensures you're always in the loop - without constant interruptions.`}</p>
      </div>
      <div className="blog-subheader">{`The Future of Work is Here`}</div>

      <div className="blog-content">
        <p>{`We're not just building another productivity tool. We're reimagining how teams collaborate in the digital age. With Ekai, you can spend more time doing what really MATTERS, leaving the rest to your AI twin.`}</p>
      </div>

      <div className="blog-content">
        <p>{`Stay tuned as we unveil how Ekai is set to transform hybrid work from a challenge into your team's greatest strength.`}</p>
      </div>
      <div className="blog-content">
        <p>{`Are you ready to meet your AI twin?`}</p>
      </div>

      <div className="blog-footer">
        <div className="flex justify-center">
          <div className="flex">
            <div className="profile rounded">
              <Image className="profile" src={ashutosh} alt="profile" />
            </div>
            <div className="ml-4">
              <p className="text-center"> By Ashutosh Tiwari</p>
              <p className="text-center"> July 29, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
