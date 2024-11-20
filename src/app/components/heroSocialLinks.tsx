import { FaLinkedin, FaTwitter, FaGithub, FaStackOverflow, FaDatabase } from "react-icons/fa";

export default function HeroSocialLinks() {
  return (
    <div>
      {/* Desktop View - Vertical Layout */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg p-2 shadow-lg z-10 hidden md:flex flex-col items-center space-y-4 text-gray-800">
        <a href="https://www.linkedin.com/in/sql-developer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaLinkedin size={20} />
        </a>
        <a href="https://twitter.com/sql-developer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter size={20} />
        </a>
        <a href="https://github.com/sql-developer" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
          <FaGithub size={20} />
        </a>
        <a href="https://stackoverflow.com/users/sql-developer" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
          <FaStackOverflow size={20} />
        </a>
        <a href="https://www.sql-database.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
          <FaDatabase size={20} />
        </a>
      </div>

      {/* Mobile View - Floating Centered Layout
      <div className="flex md:hidden fixed bottom-10 left-1/2 transform -translate-x-1/2 justify-center space-x-6 items-center bg-gray-800 bg-opacity-80 text-white rounded-full py-2 px-4 mb-5 shadow-lg backdrop-blur-lg z-10">
        <a href="https://www.linkedin.com/in/sql-developer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
          <FaLinkedin size={22} />
        </a>
        <a href="https://twitter.com/sql-developer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
          <FaTwitter size={22} />
        </a>
        <a href="https://github.com/sql-developer" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
          <FaGithub size={22} />
        </a>
        <a href="https://stackoverflow.com/users/sql-developer" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-300">
          <FaStackOverflow size={22} />
        </a>
        <a href="https://www.sql-database.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
          <FaDatabase size={22} />
        </a>
      </div> */}
    </div>
  );
}
