import React from "react";
import { User, Search, Compass, Grid, Home, Settings, ShieldAlert } from "lucide-react";

export const Sidebar = ({ 
  activeRegion, 
  activeCol, 
  sidebarFocused, 
  syncMouseFocus, 
  activeTab, 
  setActiveTab 
}) => {
  const sidebarItems = [
    { icon: User, label: "Profile", id: "profile" },
    { icon: Search, label: "Search", id: "search" },
    { icon: Compass, label: "Discover", id: "discover" },
    { icon: Grid, label: "All Apps", id: "apps-shortcut" },
    { icon: Home, label: "Home", id: "home" },
    { icon: Settings, label: "Settings", id: "settings" },
    { icon: ShieldAlert, label: "Security", id: "security" }
  ];

  const handleMouseEnter = (index) => {
    syncMouseFocus("sidebar", index, 0);
  };

  const handleItemClick = (item, index) => {
    if (item.id === "home") {
      setActiveTab("for-you");
    } else if (item.id === "apps-shortcut") {
      setActiveTab("apps");
    } else {
      alert(`Sidebar shortcut clicked: ${item.label}`);
    }
  };

  return (
    <div className={`tv-sidebar ${sidebarFocused ? "expanded" : ""}`}>
      <div className="sidebar-brand">
        <span style={{ fontSize: "0.8rem", fontWeight: "900", color: "#030812" }}>UG</span>
      </div>
      
      <div className="sidebar-items">
        {sidebarItems.map((item, index) => {
          const IconComp = item.icon;
          const isFocused = activeRegion === "sidebar" && activeCol === index;
          const isActive = 
            (item.id === "home" && activeTab === "for-you") ||
            (item.id === "apps-shortcut" && activeTab === "apps");

          return (
            <button
              key={item.id}
              className={`sidebar-item ${isFocused ? "focused" : ""} ${isActive ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleItemClick(item, index)}
              style={isActive && !isFocused ? { color: "var(--color-accent-blue)" } : {}}
            >
              <IconComp size={20} strokeWidth={isFocused ? 2.5 : 2} />
              <span className="sidebar-item-text">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
