"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import play from "../../assets/play.svg";
import "./style.scss";
import { storage } from "../../firebase/firebase";

import { trackEvent } from "@/mixpanel";
import { getDownloadURL, ref } from "firebase/storage";

const ActionVedio = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const videoRef = ref(
          storage,
          process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_VIDEO
        );
        const url = await getDownloadURL(videoRef);
        setVideoUrl(url);
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    };

    fetchVideoUrl();
  }, []);

  const handlePlayVideo = () => {
    trackEvent("demo_video_clicked");
    setShowVideo(true);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const handleVideoPlay = () => {
    trackEvent("demo_video_clicked");
    console.log("Video started playing");
  };
  return (
    <div className="action-vedio-wrapper">
      {videoUrl && showVideo ? (
        <div className="video-container">
          {!videoLoaded && (
            <div className="spinner-container">
              <FaSpinner className="spinner" />
            </div>
          )}
          <video
            width="800"
            controls
            onCanPlayThrough={handleVideoLoaded}
            onPlay={handleVideoPlay}
            autoPlay={true}
            style={{ display: videoLoaded ? "block" : "none" }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div onClick={handlePlayVideo} className="action-vedio-container">
          <Image src={play} alt="Play" className="play" />
        </div>
      )}
    </div>
  );
};

export default ActionVedio;
