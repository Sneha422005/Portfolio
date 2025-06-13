export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-900">MyPortfolio</h1>
        <ul className="flex space-x-6 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-indigo-500">Home</a></li>
          <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
          <li><a href="#education" className="hover:text-indigo-500">Education</a></li>
          <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
