import React, { useState } from 'react';
import { FaFileAlt, FaBars } from 'react-icons/fa';

const Sidebar = ({ openFolder }) => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State for collapsible sidebar

  const folders = [
    { name: '_hello', icon: <FaFileAlt className="text-teal-400" /> },
    { name: '_education', icon: <FaFileAlt className="text-blue-400" /> },
    { name: '_projects', icon: <FaFileAlt className="text-green-400" /> },
    { name: '_contact-me', icon: <FaFileAlt className="text-purple-400" /> },
  ];

  return (
    <div
      className={`${
        isCollapsed ? 'w-16' : 'w-1/4'
      } bg-gray-900 p-4 border-r border-gray-700 h-full flex flex-col transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="text-gray-400 hover:text-teal-400 mb-4 focus:outline-none"
      >
        <FaBars size={20} />
      </button>

      {/* File List */}
      <ul className="space-y-2">
        {folders.map((folder) => (
          <li
            key={folder.name}
            onClick={() => openFolder(folder.name)}
            className={`flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-800 ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            {folder.icon}
            {!isCollapsed && <span>{folder.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
