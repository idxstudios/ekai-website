import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";
import { FaSpinner } from "react-icons/fa";
import "./style.scss";
import videothumb from "../../assets/videothumb.jpg";
import play from "../../assets/play.svg";

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
          {/* {!videoLoaded && 
            <img src={videothumb} alt="Thumbnail" />
          } */}
        </div>
      ) : (
        <div onClick={handlePlayVideo} className="action-vedio-container">
          <img src={play} alt="Play" className="play" />
        </div>
      )}
    </div>
  );
};

export default ActionVedio;
