import React from "react";
import "./styles.scss";

export default function ElevateCard({
  reverse,
  gifSrc,
  title,
  para,
  category,
  id,
}) {
  console.log("GIF Source:", gifSrc);

  const isVideo = gifSrc.endsWith(".mp4");

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
            <img alt="card" src={gifSrc} />
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
