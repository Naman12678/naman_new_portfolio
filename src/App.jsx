import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TabManager from './components/TabManager';
import ContentViewer from './components/ContentViewer';
import Footer from './components/Footer';

const App = () => {
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState('_hello');

  const openFolder = (folder) => {
    if (!openTabs.includes(folder)) {
      setOpenTabs([...openTabs, folder]);
    }
    setActiveTab(folder);
  };

  const closeTab = (folder) => {
    const updatedTabs = openTabs.filter((tab) => tab !== folder);
    setOpenTabs(updatedTabs);

    if (activeTab === folder) {
      setActiveTab(updatedTabs.length > 0 ? updatedTabs[0] : null);
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar openFolder={openFolder} />
        <div className="flex-1 flex flex-col bg-gray-800">
          <TabManager
            openTabs={openTabs}
            closeTab={closeTab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <ContentViewer activeTab={activeTab} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
