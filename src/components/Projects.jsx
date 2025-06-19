const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'Built using React and Tailwind CSS. Showcases my skills, projects, and experience.',
    link: '#',
  },
  {
    id: 2,
    title: 'X-Age',
    description: 'A web app that predicts bone age and gender from hand X-ray images using deep learning.',
    link: 'https://github.com/Sneha422005/XAGE-Bone_Age_Gender_Prediction',
  },
  {
    id: 3,
    title: 'TrainEZ',
    description: 'Fitness app that provides real-time feedback to improve workout precision.',

    link: 'https://github.com/Sneha422005/TrainEZ',
  },
  {
    id: 4,
    title: 'PixCrypt',
    description: 'Image encryption tool using pixel-wise XOR and pseudo-random keys , Pillow, and NumPy. ',

    link: 'https://github.com/Sneha422005/PixCrypt',
  },
  {
    id: 5,
    title: 'KeyTrack',
    description: 'A simple Python keylogger that records keystrokes to a log file using the `pynput` library.',

    link: 'https://github.com/Sneha422005/KeyTrack',
  },
  {
    id: 6,
    title: 'SniffNet',
    description: 'Python tool to capture and analyze network packets using Scapy.',


    link: 'https://github.com/Sneha422005/SniffNet',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-purple-500 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
