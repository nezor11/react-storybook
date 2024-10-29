/**
 * VideoPlayer is a component that renders a video player using the ReactPlayer library. It supports loading state and custom configurations for YouTube videos.
 *
 * Props:
 * - videoUrl: The URL of the video to be played.
 * - onReady: A callback function to be called when the video is ready to play.
 * - isPlaying: A boolean indicating whether the video should be playing or paused.
 *
 * Example usage:
 * <VideoPlayer
 *   videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
 *   onReady={() => console.log("Video is ready!")}
 *   isPlaying={true}
 * />
 */

import Loader from "@/stories/components/atoms/Loader";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./index.css";

interface VideoPlayerProps {
  videoUrl: string;
  onReady: () => void;
  isPlaying: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  onReady,
  isPlaying,
}) => {
  const [loading, setLoading] = useState(true);

  const handlePlayerReady = () => {
    setLoading(false);
    onReady();
  };

  return (
    <div className="video-wrapper mt-8 lg:mt-0 overflow-hidden relative w-full lg:w-[600px] xl:w-[900px] 2xl:w-[1200px] mb-8 lg:mb-0 max-w-full">
      <div
        className={`player-wrapper ${loading ? "loading" : ""} relative pt-[56.25%]`}
      >
        {loading && <Loader />}
        <ReactPlayer
          className="absolute top-0 left-0 w-full h-full"
          url={videoUrl}
          width="100%"
          height="100%"
          playing={isPlaying}
          config={{
            youtube: {
              playerVars: {
                origin: "https://www.youtube.com",
                showinfo: 0,
                controls: 1,
              },
            },
          }}
          onReady={handlePlayerReady}
        />
      </div>
    </div>
  );
};
