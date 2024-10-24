"use client";
import React from "react";
import "./style.scss";
import Image from "next/image";

export default function ElevateCard({
  reverse,
  gifSrc,
  title,
  para,
  category,
  id,
}) {
  console.log("GIF Source:", gifSrc);

  const isVideo = `${gifSrc}`.endsWith(".mp4");

  return (
    <main>
      <div className={`Elevate ${reverse ? "row-rev" : "row"}`}>
        <div className="left">
          {isVideo ? (
            <div className="video-container">
              <video autoPlay muted loop playsInline>
                <source src={gifSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="p-4">
              {" "}
              <Image
                loading="eager"
                priority={true}
                style={{ borderRadius: "16px" }}
                alt="card"
                src={gifSrc}
              />
            </div>
          )}
          {/* <img alt="card" src={gifSrc} /> */}
        </div>
        <div className="right">
          {category && <p className={`category${id}`}>{category}</p>}
          {/* <p className={`category${id}`}>{category}</p> */}
          <h1>{title}</h1>
          <p>{para}</p>
        </div>
      </div>
    </main>
  );
}
