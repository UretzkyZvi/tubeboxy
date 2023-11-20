import React, { useRef, useEffect, FC } from "react";
import Hls from "hls.js";

interface HLSVideoPlayerProps {
  src: string;
}

const HLSVideoPlayer: FC<HLSVideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let hls: Hls | undefined;

    if (Hls.isSupported() && videoRef.current) {
      // Initialize Hls.js
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        videoRef.current?.play();
      });
    } else if (videoRef.current?.canPlayType("application/vnd.apple.mpegurl")) {
      // This will run on Safari browsers where HLS is natively supported
      videoRef.current.src = src;
      videoRef.current.addEventListener("loadedmetadata", function () {
        videoRef.current?.play();
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video ref={videoRef} controls style={{ width: "100%" }}>
      <p>Your browser does not support the video tag.</p>
    </video>
  );
};

export default HLSVideoPlayer;
