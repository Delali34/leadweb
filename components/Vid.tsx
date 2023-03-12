import { useRef, useState } from "react";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleDurationChange = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;
      const percentage = x / width;
      const newTime = duration * percentage;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setIsFinished(true);
  };

  const handlePlayAgain = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setIsFinished(false);
    }
  };

  return (
    <div
      className="relative w-full "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        className="w-full"
        src="/video.webm"
        autoPlay={isPlaying}
        muted
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleDurationChange}
        onEnded={handleVideoEnd}
      />
      {!isFinished ? (
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            isHovering ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200`}
        >
          {isPlaying ? (
            <button
              className="text-white hover:text-gray-300 transition-colors bg-purple-500 hover:bg-purple-600 p-3 font-bold rounded-md"
              onClick={handlePlayPause}
            >
              Pause
            </button>
          ) : (
            <button
              className="text-white hover:text-gray-300 transition-colors bg-purple-500 hover:bg-purple-600 p-3 font-bold rounded-md"
              onClick={handlePlayPause}
            >
              Play
            </button>
          )}
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white text-lg mb-4 bg-black p-3 rounded-md">
            Video Complete!
          </p>
          <button
            className="text-white bg-purple-500 hover:bg-purple-600 transition-colors px-4 py-2 rounded"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4 bg-black">
        <div
          className="h-1 bg-gray-300 flex-1 mx-4 relative"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-purple-500 absolute left-0 top-0"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
