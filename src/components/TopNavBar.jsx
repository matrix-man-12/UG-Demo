import React from "react";
import { Compass, Tv, Grid, Sparkles } from "lucide-react";

export const TopNavBar = ({ 
  activeRegion, 
  activeCol, 
  activeTab, 
  setActiveTab, 
  syncMouseFocus 
}) => {
  const tabs = [
    { id: "for-you", label: "For You", icon: Compass },
    { id: "live", label: "Live TV", icon: Tv },
    { id: "apps", label: "Apps Store", icon: Grid }
  ];

  const handleMouseEnterVac = () => {
    syncMouseFocus("top-nav", 0, 0);
  };

  const handleVacClick = () => {
    setActiveTab("vac");
    syncMouseFocus("top-nav", 0, 0);
  };

  const handleMouseEnterTab = (index) => {
    // Column 0 is reserved for VAC, so offset tabs by 1!
    syncMouseFocus("top-nav", index + 1, 0);
  };

  const handleTabClick = (tabId, index) => {
    setActiveTab(tabId);
    syncMouseFocus("top-nav", index + 1, 0);
  };

  const isVacFocused = activeRegion === "top-nav" && activeCol === 0;
  const isVacActive = activeTab === "vac";

  return (
    <div className="top-nav-container">
      {/* VAC Button (Vision AI Companion) - Kept separate from the main capsule container */}
      <button
        className={`vac-nav-button ${isVacFocused ? "focused" : ""} ${isVacActive ? "active" : ""}`}
        onMouseEnter={handleMouseEnterVac}
        onClick={handleVacClick}
      >
        <Sparkles size={16} fill={isVacActive || isVacFocused ? "currentColor" : "none"} />
        <span>Vac</span>
      </button>

      {/* Main Tab capsule pill */}
      <div className="top-nav-pill">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isFocused = activeRegion === "top-nav" && activeCol === index + 1;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              className={`top-nav-item ${isFocused ? "focused" : ""} ${isActive ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnterTab(index)}
              onClick={() => handleTabClick(tab.id, index)}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default TopNavBar;
