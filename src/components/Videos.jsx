import { videos } from "../utils/videos";

function Videos() {
  return (
    <div className="content-center  place-items-center gap-4 my-4">
      <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl font-semibold text-center mb-6">
        Watch & Learn
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 content-center gap-5 m-5">
        {videos.map((video) => (
            <div key={video.videoHeading} className="flex items-center gap-5 justify-between">
                <div className="">{video.link}</div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
