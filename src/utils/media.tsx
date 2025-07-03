// src/utils/media.ts

import type { JSX } from "react";

export const isVideo = (filename: string): boolean => {
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
  return videoExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
};

export const renderMedia = (
  src: string,
  alt: string,
  className: string
): JSX.Element => {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        className={className}
        controls
        muted
        preload="metadata"
        onError={(e) => {
          console.error(e, "Video failed to load:", src);
        }}
      >
        Your browser does not support the video tag.
      </video>
    );
  } else {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={(e) => {
          console.error(e, "Image failed to load:", src);
        }}
      />
    );
  }
};
