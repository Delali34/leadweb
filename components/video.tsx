import React, { useState, useRef } from "react";
import Image from "next/image";

const VideoPlayer: React.FC = () => {
  const [playing, setPlaying] = useState(false);

  const [fullScreen, setFullScreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setPlaying(!playing);
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (fullScreen) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
    setFullScreen(!fullScreen);
  };

  return (
    <div className="relative md:w-[60%] w-[100%]">
      <video
        className="w-full h-full object-cover"
        ref={videoRef}
        src="/NEW MONTAGE 2023 (1) (1).webm"
        onClick={handlePlayPause}
      />
      <div className="absolute bottom-0 left-0 right-0">
        <div className=" py-2 px-4 flex justify-between items-center">
          <div className="flex">
            <button
              className={`${
                playing ? "hidden" : "block bg-purple-500"
              } focus:outline-none`}
              onClick={handlePlayPause}
            ></button>
            <button
              className={`${
                playing ? "block bg-purple-500" : "hidden"
              } focus:outline-none ml-4`}
              onClick={handlePlayPause}
            ></button>
          </div>
          <div className="flex lg:block ">
            {/* <button
              className="md:block ml-4 focus:outline-none hidden "
              onClick={handleMute}
            >
              <img src="/icons8-mute-unmute-30 (1).png" alt="" />
            </button> */}
            <button
              className="ml-4 focus:outline-none"
              onClick={handleFullScreen}
            >
              <Image
                width={50}
                height={50}
                src="/icons8-full-screen-30 (1).png"
                alt=""
              />
            </button>
          </div>
        </div>
        {/* <div className="bg-purple-500 py-2">
          <div className="w-full h-2 bg-gray-700 rounded-lg">
            <div
              className="w-0 h-full bg-white rounded-lg transition-all duration-200 ease-in-out"
              style={{
                width: `${
                  videoRef.current?.currentTime && videoRef.current?.duration
                    ? (videoRef.current.currentTime /
                        videoRef.current.duration) *
                      100
                    : 0
                }%
`,
              }}
            />
          </div>
        </div> */}
      </div>
      <button
        className={`${
          playing ? "hidden" : "block"
        } absolute inset-0 h-full w-full flex items-center justify-center`}
        onClick={handlePlayPause}
      >
        <Image
          width={50}
          height={50}
          className="md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
          src="/icons8-play-button-circled-90.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default VideoPlayer;
