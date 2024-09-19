import video from "../images/sean-intro.mp4";

function Video() {
  return (
    <div className="video-container">
      <h2>Meet your instructor!</h2>
      <video
        src={video}
        className="intro-video"
        controls
        type="video/webm"
      ></video>
    </div>
  );
}

export default Video;
