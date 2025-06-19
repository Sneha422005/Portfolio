import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import Contact from './components/Contact';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <>
      <VideoBackground />
      <div className="font-sans text-gray-800 relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
