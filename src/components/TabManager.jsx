import React from 'react';

const TabManager = ({ openTabs, closeTab, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-2 overflow-x-auto bg-gray-800 p-2 scrollbar-hide">
      {openTabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => setActiveTab(tab)}
          className={`flex items-center cursor-pointer px-4 py-2 rounded-t-md whitespace-nowrap ${
            activeTab === tab ? 'bg-gray-900 text-white' : 'bg-gray-700'
          }`}
        >
          <span className="overflow-hidden text-ellipsis">{tab}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeTab(tab);
            }}
            className="ml-2 text-red-500 hover:text-red-600 focus:outline-none"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default TabManager;
