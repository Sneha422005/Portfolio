export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source src="videoplayback.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
