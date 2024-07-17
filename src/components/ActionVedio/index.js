import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";
import "./style.scss";
import videothumb from "../../assets/videothumb.jpg";


const ActionVedio = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const videoRef = ref(
          storage,
          process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_VIDEO
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
    setShowVideo(true);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const handleVideoPlay = () => {
    console.log("Video started playing");
  };

  return (
    <div className="action-vedio-wrapper">
      {videoUrl && showVideo ? (
        <div className="video-container">
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
          {!videoLoaded && <img src={videothumb} alt="Logo" />}
        </div>
      ) : (
        <div onClick={handlePlayVideo} className="action-vedio-container">
          <svg
            className="vedioPlay-circle"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle id="Ellipse 30" cx="60" cy="60" r="60" fill="#C87A3D" />
          </svg>

          <svg
            className="VideoPlay-icon"
            width="36"
            height="40"
            viewBox="0 0 36 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33 14.8038C37 17.1132 37 22.8868 33 25.1962L9 39.0526C5 41.362 0 38.4752 0 33.8564L0 6.14359C0 1.52479 5 -1.36196 9 0.947441L33 14.8038Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ActionVedio;
