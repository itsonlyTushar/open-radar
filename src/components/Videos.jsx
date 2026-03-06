import { videos } from "../utils/videos";
import React from "react";

function Videos() {
  return (
    <div className="content-center place-items-center gap-4 my-4">
      <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl font-semibold text-center mb-6">
        Watch & Learn
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 content-center gap-5 m-5">
        {videos.map((video) => (
          <div
            key={video.videoId}
            className="flex items-center gap-5 justify-between"
          >
            <div className="aspect-video max-w-xl w-full mx-auto my-5 border border-black rounded-md">
              <iframe
                className="w-full h-full rounded-md"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.videoHeading}
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
