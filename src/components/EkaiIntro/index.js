import React, { useEffect, useState } from "react";
import "./styles.scss";
import logo from "../../assets/ekai-logo.svg";
import workplaceImg from "../../assets/workplace-img-one.svg";
import workplaceGirl from "../../assets/workplace-img-girl.svg";

export const EkaiIntro = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ekai-intro-main-cont">
      <div className="ekai-intro-cont flex-row items-center">
        <div className="left-cont">
          <div className="logo-container flex-row items-center">
            <img src={logo} alt="Logo" />
            <span className="app-name">ekai</span>
          </div>
          <div className="left-cont-heading">
            Revolutionise Workplace Productivity
          </div>
          <p className="left-cont-subheading">
            Let AI work for you while you can focus on what is important
          </p>
          <button className="left-cont-button">I am interested !</button>
        </div>
        <div className="right-cont">
          <div class="large-image-container">
            <img src={workplaceImg} alt="Work Place Img" />

            <div class="animation-container">
              {showFirstImage ? (
                <svg
                  id="svg1"
                  class="image first"
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="79"
                  viewBox="0 0 47 79"
                  fill="none"
                >
                  <path
                    d="M40.1157 55.3954C37.5173 52.7974 34.4623 50.9375 31.206 49.8125L40.1067 40.9206C49.2838 31.7586 49.2838 16.9028 40.1067 7.74087C30.9326 -1.42404 16.057 -1.42404 6.88284 7.74087C-2.29428 16.9028 -2.29428 31.7586 6.88284 40.9206C9.41218 43.4495 12.3771 45.2795 15.5373 46.4105L8.1415 54.2344C7.71494 54.6064 7.30039 54.9904 6.89485 55.3954C5.55508 56.7334 4.40757 58.1944 3.46432 59.7394L10.1932 62.7693L15.7385 65.2623L16.5796 65.6433C16.6728 65.5413 16.7659 65.4423 16.862 65.3463C20.5299 61.6834 26.4807 61.6834 30.1516 65.3463C32.2363 67.4283 33.1345 70.2483 32.8491 72.9632L45.9674 78.8672C48.4337 70.8333 46.4811 61.7404 40.1187 55.3894L40.1157 55.3954ZM16.847 30.9667C13.1792 27.3037 13.1792 21.3607 16.847 17.6948C20.5148 14.0258 26.4657 14.0258 30.1365 17.6948C33.8104 21.3577 33.8104 27.3007 30.1365 30.9667L23.4948 37.9926V33.7146C21.0886 33.7146 18.6824 32.7996 16.85 30.9667H16.847Z"
                    fill="#C87A3C"
                  />
                </svg>
              ) : (
                <img
                  src={workplaceGirl}
                  className=" image second"
                  alt="Work PLace Girl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
