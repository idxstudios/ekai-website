import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";
import "./style.scss";

const ActionVedio = () => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideoUrl = async () => {
      const videoRef = ref(
        storage,
        process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_VIDEO
      );
      const url = await getDownloadURL(videoRef);
      setVideoUrl(url);
    };

    fetchVideoUrl();
  }, []);

  return (
    <div className="action-vedio-wrapper">
      <h4>See Ekai in action</h4>
      {videoUrl ? (
        <div className="video-container">
          <video width="600" controls>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      ) : (
        <>
          <div className="action-vedio-container">
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
        </>
      )}
    </div>
  );
};

export default ActionVedio;
