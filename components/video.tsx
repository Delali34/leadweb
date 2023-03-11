import React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <div className="relative md:w-[60%] w-[100%]">
      <video controls src="/video.webm"></video>
    </div>
  );
};

export default VideoPlayer;
