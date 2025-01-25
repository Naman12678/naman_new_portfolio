import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import TabManager from './components/TabManager';
import ContentViewer from './components/ContentViewer';
import Footer from './components/Footer';

const App = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState('_hello');

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Conditionally render Sidebar or TopBar */}
      {isMobileView ? (
        <TopBar openFolder={openFolder} />
      ) : (
        <div className="flex flex-1">
          <Sidebar openFolder={openFolder} />
          <div className="flex-1 flex flex-col">
            <TabManager
              openTabs={openTabs}
              closeTab={closeTab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <ContentViewer activeTab={activeTab} />
          </div>
        </div>
      )}

      {/* Render Content in Mobile View */}
      {isMobileView && activeTab && (
        <div className="flex-1">
          <ContentViewer activeTab={activeTab} />
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
