import React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <div className="relative md:w-[60%] w-[100%]">
      <video
        controls
        src="https://res.cloudinary.com/dpbuwo8ha/video/upload/v1678626891/video_zuoi1x.webm"
      ></video>
    </div>
  );
};

export default VideoPlayer;
