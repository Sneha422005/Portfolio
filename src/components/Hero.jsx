export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 text-center"
    >
      {/* Profile Picture */}
      <div className="mb-8">
        <img
          src="src/assets/profile.jpg"
          alt="Sneha Aravind"
          className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
        />
      </div>

      {/* Text Content */}
      <div>
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3">Hi, I'm</h1>
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl text-purple-400">Sneha Aravind</h1>
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-10 mx-auto">
          A passionate student with a strong interest in web development, cybersecurity, and space technology.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
