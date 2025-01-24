import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 text-gray-400 p-2 text-center text-sm flex justify-between items-center">
      <p>&copy; 2025 Naman Sharma</p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/Naman12678"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/NamanSharm31165"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com/in/naman-sharma-50588528b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
