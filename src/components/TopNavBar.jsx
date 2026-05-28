import React from "react";
import { Compass, Tv, Grid } from "lucide-react";

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

  const handleMouseEnter = (index) => {
    syncMouseFocus("top-nav", index, 0);
  };

  const handleTabClick = (tabId, index) => {
    setActiveTab(tabId);
    syncMouseFocus("top-nav", index, 0);
  };

  return (
    <div className="top-nav-container">
      <div className="top-nav-pill">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isFocused = activeRegion === "top-nav" && activeCol === index;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              className={`top-nav-item ${isFocused ? "focused" : ""} ${isActive ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
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
