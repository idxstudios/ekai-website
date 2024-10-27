import React from "react";
import "./styles.css";
import Image from "next/image";
import gaurav from "../../../assets/gaurav.jpg";

const Blog1 = () => {
  const src = "https://i.ibb.co/ZYn2KF6/realtime.png";
  return (
    <div className="blog-container items-center">
      <h1 className="blog-title">{`Building Ekai: Revolutionizing Productivity with AI in a Global Team`}</h1>
      <img
        src={src}
        alt="Blog image"
        className="blog-image"
      />

      <div className="blog-subheader">{`How I met my Co-Founder:`}</div>

      <div className="blog-content">
        <p>{`
        In early 2023, I first connected with Ashutosh Tiwari, a close friend of my elder brother and now co-founder and CEO at Ekai, while I was exploring new opportunities and he was thriving at Coinbase. The discussions around innovative problem-solving techniques captivated me. Fast forward to early 2024, and we reconnected over a phone call to discuss Ekai. The concept was compelling: harnessing generative AI to create digital twins that boost productivity for knowledge workers with intelligent, AI-driven interactions. I was intrigued by the idea and the significant market potential from the outset. I met Ashutosh for a decisive 45-minute meeting in Lucknow. From that moment, there was no turning back, marking the start of an exhilarating journey.
        `}</p>
      </div>
      <div className="blog-subheader">
        {`Navigating Time Zones and Cultures: The Startup at 0-1`}
      </div>

      <div className="blog-content">
        <p>
          {`Starting Ekai was a unique challenge. Ashutosh resided in Canada, and I, in India. Our first few months were occupied with adapting to a near-continuous operation across drastically different time zones. This geographical spread, however, turned into a strategic advantage, allowing us to stay close to diverse user groups and build a robust development team back in India. Through relentless documentation and thousands of Slack messages, we didn't just manage; we thrived, gaining deep insights into the very productivity challenges Ekai aims to solve across communication and collaboration tools`}
        </p>
      </div>
      <div className="blog-subheader">
        {`Cultivating a Team with Vision: Motivated and Adventurous`}
      </div>

      <div className="blog-content">
        <p>{`I've always aimed to build teams composed of individuals who prioritize impactful work in their lives, and people who view salary as a byproduct—sure, compensation is important and we strive to reward them according to market standards. This approach was cultivated during my time at Circle, the startup I co-founded with Shashank and Uchit. We often hear from former colleagues about how much they valued the culture we created, a culture we cultivated from our core values and beliefs in developing camaraderie and mutual co-learning at the workplace. Similarly, at Ekai, we're dedicated to fostering a culture of trust, respect, ownership, and problem-solving. What better way to do this than by reaching out to trusted and talented friends? Amit Kumar , my college roommate, now leads our tech division, and Rahul, my hostel wingmate, heads the AI department. They have become integral not only through their connections with me and Ashutosh but also because they fully embrace Ekai's vision and the exciting opportunities that generative AI presents.`}</p>
      </div>
      <div className="blog-subheader">
        {`From Development to Deployment: The AI Challenge`}
      </div>

      <div className="blog-content">
        <p>{`Discussing my experience in developing an AI product, I can succinctly say that Large Language Models (LLMs) are potent and continue to become more powerful, yet achieving precise predictive accuracy remains challenging. Nevertheless, there's a persistent belief that they will eventually perform wonders for the world. From the perspective of the development cycle, creating a development-ready product from scratch and then transitioning that version to production demands equal effort due to the unpredictability of testing and accuracy. Despite these challenges, building an AI product is exhilarating; there are moments when you are utterly amazed by the capabilities of LLMs, and other times when it feels like you’re dealing with the most obtuse model imaginable.`}</p>
      </div>
      <div className="blog-subheader">
        {`Looking Ahead: What’s Next for Ekai`}
      </div>

      <div className="blog-content">
        <p>{`Today, Ekai offers a powerful Slack application that employs AI to manage and automate routine tasks, from handling repetitive inquiries to organizing documents and scheduling. Over the next month, we will enhance the functionalities in Slack to include seamless document creation from the information present on Slack, advanced writing assistance to make communication a low cognitive task, and a Google Chrome extension to expand our reach beyond Slack.`}</p>
      </div>

      <div className="blog-subheader">{`Join Us on This Journey`}</div>

      <div className="blog-content">
        <p>{`If you’re as excited about transforming workplace productivity as we are, or if you’re curious to experience Ekai firsthand, please reach out to me or Ashutosh Tiwari directly via DM. `}</p>
      </div>

      <div className="blog-footer">
        <div className="flex justify-center">
          <div className="flex">
            <div className="profile rounded">
              <Image className="profile" src={gaurav} alt="profile" />
            </div>
            <div className="ml-4">
              <p className="text-center"> By Gaurav Agrawal</p>
              <p className="text-center"> July 12, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
