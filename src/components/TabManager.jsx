import React from 'react';

const TabManager = ({ openTabs, closeTab, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-4 bg-gray-800 p-2">
      {openTabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => setActiveTab(tab)}
          className={`cursor-pointer px-4 py-2 rounded-t-md ${
            activeTab === tab ? 'bg-gray-900 text-white' : 'bg-gray-700'
          }`}
        >
          {tab}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeTab(tab);
            }}
            className="ml-2 text-red-500"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default TabManager;
