import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const TopBar = ({ openFolder }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const folders = [
    { name: '_hello', label: 'Hello' },
    { name: '_about-me', label: 'About Me' },
    { name: '_education', label: 'Education' },
    { name: '_skills', label: 'Skills' },
    { name: '_projects', label: 'Projects' },
    { name: '_contact-me', label: 'Contact Me' },
  ];

  const handleMenuClick = (folder) => {
    openFolder(folder); // Open the folder
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div className="bg-gray-900 border-b border-gray-700 p-4 flex items-center justify-between">
      <h1 className="text-teal-400 font-bold text-lg">Naman Sharma</h1>
      <button
        onClick={() => setIsMenuOpen(true)}
        className="text-gray-400 hover:text-teal-400 focus:outline-none"
      >
        <FaBars size={20} />
      </button>

      {/* Translucent Overlay for Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center text-white z-50">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-red-500 text-xl"
          >
            ✕
          </button>
          <ul className="space-y-4 text-lg">
            {folders.map((folder) => (
              <li
                key={folder.name}
                onClick={() => handleMenuClick(folder.name)}
                className="cursor-pointer hover:text-teal-400"
              >
                {folder.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopBar;
