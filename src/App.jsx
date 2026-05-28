import React, { useState, useEffect, useRef } from "react";
import SamsungTvLayout from "./components/SamsungTvLayout";
import DeveloperConsole from "./components/DeveloperConsole";
import VirtualRemote from "./components/VirtualRemote";
import DetailsPage from "./components/DetailsPage"; // Import Details page

function App() {
  const [apiLatency, setApiLatency] = useState(500); // Simulated API latency in ms
  const [mouseNavEnabled, setMouseNavEnabled] = useState(true); // Hover-to-focus mouse override (default ON)
  const [selectedMedia, setSelectedMedia] = useState(null); // High-fidelity Details Page State
  
  // Navigation Engine Ref to link floating VirtualRemote button clicks to useTvNavigation spatial logic
  const [navEngine, setNavEngine] = useState(null);

  // Trigger main layout updates when DB edits are made in developer mutator
  const [dbMutationToken, setDbMutationToken] = useState(0);
  const handleLayoutMutated = () => {
    setDbMutationToken(prev => prev + 1);
  };

  const registerNavigationEngine = (engine) => {
    setNavEngine(engine);
  };

  // decoupled listener for opening full details overlay
  useEffect(() => {
    const handleOpenDetails = (e) => {
      setSelectedMedia(e.detail);
    };
    window.addEventListener("open-details", handleOpenDetails);
    return () => window.removeEventListener("open-details", handleOpenDetails);
  }, []);

  return (
    <div className="simulator-container">
      {/* 1. Core High-Fidelity Samsung TV Screen Simulator */}
      <SamsungTvLayout
        apiLatency={apiLatency}
        setApiLatency={setApiLatency}
        mouseNavEnabled={mouseNavEnabled}
        setMouseNavEnabled={setMouseNavEnabled}
        registerNavigationEngine={registerNavigationEngine}
        key={dbMutationToken} // Rerenders to fetch fresh JSON if DB mutated
      />

      {/* 2. Floating Tizen OS Interactive Smart Remote Control */}
      <VirtualRemote
        navigateGrid={navEngine?.navigateGrid || (() => {})}
        triggerSelection={navEngine?.triggerSelection || (() => {})}
        setActiveRegion={navEngine?.setActiveRegion || (() => {})}
        setActiveCol={navEngine?.setActiveCol || (() => {})}
        setActiveRow={navEngine?.setActiveRow || (() => {})}
        setActiveTab={navEngine?.setActiveTab || (() => {})}
        mouseNavEnabled={mouseNavEnabled}
        setMouseNavEnabled={setMouseNavEnabled}
      />

      {/* 3. Slide-out Developer Panel & Simulated API Monitor */}
      <DeveloperConsole
        activeTab={navEngine ? (navEngine.activeTab || "for-you") : "for-you"}
        apiLatency={apiLatency}
        setApiLatency={setApiLatency}
        onLayoutMutated={handleLayoutMutated}
      />

      {/* 4. Fullscreen Details Page Overlay Overlay */}
      {selectedMedia && (
        <DetailsPage
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
}

export default App;
