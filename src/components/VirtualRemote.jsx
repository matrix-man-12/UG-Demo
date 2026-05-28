import React, { useState } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, CornerDownLeft, Home, Power, HelpCircle, Eye, EyeOff } from "lucide-react";
import { apiService } from "../services/apiService";

export const VirtualRemote = ({ 
  navigateGrid, 
  triggerSelection, 
  setActiveRegion, 
  setActiveCol, 
  setActiveRow, 
  setActiveTab, 
  mouseNavEnabled, 
  setMouseNavEnabled 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltips, setShowTooltips] = useState(false);

  const handlePowerReset = () => {
    apiService.resetDatabase();
    setActiveTab("for-you");
    setActiveRegion("shelf-0");
    setActiveCol(0);
    setActiveRow(0);
    // Use reload instead of alert to prevent app freeze
    window.location.reload();
  };

  const handleHomeBtn = () => {
    setActiveTab("for-you");
    setActiveRegion("top-nav");
    setActiveCol(0);
    setActiveRow(0);
  };

  const handleBackBtn = () => {
    setActiveRegion("top-nav");
    setActiveCol(0);
  };

  if (!isVisible) {
    return (
      <div className="virtual-remote-wrap">
        <button className="remote-toggle-btn" onClick={() => setIsVisible(true)}>
          <Eye size={14} />
          <span>Show Remote HUD</span>
        </button>
      </div>
    );
  }

  return (
    <div className="virtual-remote-wrap">
      <button className="remote-toggle-btn" onClick={() => setIsVisible(false)}>
        <EyeOff size={14} />
        <span>Hide Remote</span>
      </button>

      <div className="tizen-remote">
        {/* Remote Head: Power and Input Mode */}
        <div className="remote-power-row">
          <button 
            className="remote-power-btn" 
            onClick={handlePowerReset} 
            title="Reset Database & Settings"
          >
            <Power size={14} />
          </button>
          
          <button 
            className={`remote-input-mode-btn ${mouseNavEnabled ? "active" : ""}`}
            onClick={() => setMouseNavEnabled(!mouseNavEnabled)}
            title="Toggle Mouse Navigation"
          >
            {mouseNavEnabled ? "MOUSE ON" : "MOUSE OFF"}
          </button>
        </div>

        {/* D-Pad Buttons */}
        <div className="remote-dpad">
          <button 
            className="remote-dpad-btn up" 
            onClick={() => navigateGrid("UP")}
            title="Arrow Up Key"
          >
            <ArrowUp size={24} />
          </button>
          <button 
            className="remote-dpad-btn down" 
            onClick={() => navigateGrid("DOWN")}
            title="Arrow Down Key"
          >
            <ArrowDown size={24} />
          </button>
          <button 
            className="remote-dpad-btn left" 
            onClick={() => navigateGrid("LEFT")}
            title="Arrow Left Key"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            className="remote-dpad-btn right" 
            onClick={() => navigateGrid("RIGHT")}
            title="Arrow Right Key"
          >
            <ArrowRight size={24} />
          </button>
          
          {/* OK/ENTER BUTTON */}
          <button 
            className="remote-dpad-center" 
            onClick={triggerSelection}
            title="Enter / OK Key"
          >
            OK
          </button>
        </div>

        {/* Home & Back row */}
        <div className="remote-utility-row">
          <button 
            className="remote-util-btn" 
            onClick={handleBackBtn}
            title="Back / Return Key"
          >
            <CornerDownLeft size={16} />
            <span style={{ fontSize: "0.5rem", marginTop: "2px" }}>BACK</span>
          </button>
          
          <button 
            className="remote-util-btn" 
            onClick={handleHomeBtn}
            title="Home Screen Key"
          >
            <Home size={16} />
            <span style={{ fontSize: "0.5rem", marginTop: "2px" }}>HOME</span>
          </button>
        </div>

        {/* Helper tooltip toggle */}
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <button 
            onClick={() => setShowTooltips(!showTooltips)} 
            style={{ 
              background: "transparent", 
              border: "none", 
              color: "#4a5568", 
              cursor: "pointer",
              display: "flex",
              alignItems: "center" 
            }}
          >
            <HelpCircle size={14} />
          </button>
          <span style={{ fontSize: "0.6rem", color: "#4a5568" }}>Remote Mode</span>
        </div>

        {showTooltips && (
          <div 
            style={{ 
              background: "#121721", 
              border: "1px solid rgba(255,255,255,0.05)", 
              padding: "8px", 
              borderRadius: "8px", 
              fontSize: "0.6rem", 
              color: "#a0aec0",
              lineHeight: "1.3" 
            }}
          >
            <strong>Keyboard Keys Mapped:</strong>
            <br />• Up/Down/Left/Right Arrows
            <br />• Enter = OK button
            <br />• Backspace/Esc = BACK button
            <br />• Mouse hover = Hover focus
          </div>
        )}

        <div className="remote-logo">SAMSUNG</div>
      </div>
    </div>
  );
};
export default VirtualRemote;
