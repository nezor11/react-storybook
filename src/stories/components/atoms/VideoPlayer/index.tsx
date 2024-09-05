import Loader from "@/stories/components/atoms/Loader";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./index.css";

interface VideoPlayerProps {
  videoUrl: string;
  onReady: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  onReady,
}) => {
  const [loading, setLoading] = useState(true);

  const handlePlayerReady = () => {
    setLoading(false);
    onReady();
  };

  return (
    <div className="video-wrapper mt-8 rounded-lg overflow-hidden relative w-full lg:w-[600px] xl:w-[900px] 2xl:w-[1200px] mb-8 max-w-full">
      <div
        className={`player-wrapper ${loading ? "loading" : ""} relative pt-[56.25%]`}
      >
        {loading && <Loader />}
        <ReactPlayer
          className="absolute top-0 left-0 w-full h-full"
          url={videoUrl}
          width="100%"
          height="100%"
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
