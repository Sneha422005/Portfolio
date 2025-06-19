import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-900">MyPortfolio</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul
  className={`absolute right-6 top-20 bg-white shadow-md rounded-md p-4 space-y-4 font-medium text-gray-700 md:static md:flex md:space-x-6 md:space-y-0 md:p-0 md:bg-transparent md:shadow-none ${
    isOpen ? 'block' : 'hidden'
  }`}
>
  <li><a href="#home" className="hover:text-indigo-500 block">Home</a></li>
  <li><a href="#projects" className="hover:text-indigo-500 block">Projects</a></li>
  <li><a href="#education" className="hover:text-indigo-500 block">Education</a></li>
  <li><a href="#contact" className="hover:text-indigo-500 block">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
