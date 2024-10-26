import React from "react";
import "../buildingEkai/styles.css";

const Blog1 = () => {
  const src =
    "https://media.licdn.com/dms/image/v2/D5612AQEXnxrZx2DYmQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1722273329594?e=1735171200&v=beta&t=iUPz3TWmapDdcYPg_ye7Lw7TByw47qi_9Pz5k5yASzg";
  return (
    <div className="blog-container">
      <h1 className="blog-title">{`AI {You} for the matters that don't need REAL YOU`}</h1>
      <img
        loading="eager"
        priority={true}
        src={src}
        alt="Blog image"
        className="blog-image"
      />

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
          {`As Cal Newport wisely said, "If you don't produce, you won't thrive - no matter how skilled or talented you are."`}</p>
          <p>
          {`The tools we use today weren't designed for the complexities of hybrid work. They're remnants of an era when everyone worked in the same office, at the same time. But the world has changed, and it's time our tools caught up. `}</p>
          <p>
          {`The current state of hybrid work is hindering our ability to produce. We're spending more time managing communication than creating value. This isn't sustainable, and it's certainly not the future of work we envisioned.`}</p>
      </div>
      <div className="blog-subheader">
        {`Introducing Ekai: Your AI Twin`}
      </div>

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
      <div className="blog-subheader">
        {`The Future of Work is Here`}
      </div>

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
        <h3 className="blog-author">By Ashutosh Tiwari</h3>
        <h3 className="blog-date">July 12, 2024</h3>
      </div>
    </div>
  );
};

export default Blog1;