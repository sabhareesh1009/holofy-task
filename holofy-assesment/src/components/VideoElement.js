import React from "react";
import "./VideoElement.css";

const VideoElement = () => {
  return (
    <>
      <div className="video-container">
        <video controls width="250px" height="300px" className="video-element">
          {/* <source src="/media/cc0-videos/flower.webm"
        type="video/webm">

<source src="/media/cc0-videos/flower.mp4"
        type="video/mp4"> */}
        </video>
      </div>
    </>
  );
};

export default VideoElement;
