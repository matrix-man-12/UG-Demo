import React, { useState, useEffect, useCallback, useRef } from "react";
import { Wifi, Info } from "lucide-react";
import Sidebar from "./Sidebar";
import TopNavBar from "./TopNavBar";
import HeroBanner from "./HeroBanner";
import ShelvesList from "./ShelvesList";
import { useTvNavigation } from "../hooks/useTvNavigation";
import { apiService } from "../services/apiService";

export const SamsungTvLayout = ({ 
  apiLatency, 
  setApiLatency, 
  mouseNavEnabled, 
  setMouseNavEnabled, 
  registerNavigationEngine 
}) => {
  const [activeTab, setActiveTab] = useState("for-you");
  const [layoutData, setLayoutData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [localTime, setLocalTime] = useState("");
  
  const [dbMutationKey, setDbMutationKey] = useState(0);

  // Real-time HUD digital clock
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      setLocalTime(`${hours}:${minutes} ${ampm}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Fetch simulated API content on active tab change or DB updates
  const loadContent = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await apiService.fetchTabContent(activeTab, apiLatency);
      setLayoutData(result.response);
    } catch (err) {
      console.error("Simulated API Error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, apiLatency, dbMutationKey]);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  const refreshOnMutation = useCallback(() => {
    setDbMutationKey(prev => prev + 1);
  }, []);

  // Spatial Navigation Hook
  const navigation = useTvNavigation(activeTab, layoutData, mouseNavEnabled);

  // Link Tab state back and forth
  useEffect(() => {
    setActiveTab(navigation.activeTab);
  }, [navigation.activeTab]);

  useEffect(() => {
    navigation.setActiveTab(activeTab);
  }, [activeTab]);

  // Sync mouseNavEnabled
  useEffect(() => {
    navigation.setMouseNavEnabled(mouseNavEnabled);
  }, [mouseNavEnabled, navigation]);

  // Expose navigation controls to VirtualRemote
  useEffect(() => {
    if (registerNavigationEngine) {
      registerNavigationEngine({
        navigateGrid: navigation.navigateGrid,
        triggerSelection: navigation.triggerSelection,
        setActiveRegion: navigation.setActiveRegion,
        setActiveCol: navigation.setActiveCol,
        setActiveRow: navigation.setActiveRow,
        setActiveTab: setActiveTab
      });
    }
  }, [navigation.navigateGrid, navigation.triggerSelection, navigation.setActiveRegion, navigation.setActiveCol, navigation.setActiveRow, registerNavigationEngine]);

  // Handle mouse wheel scrolling — bridges into spatial D-pad engine
  const lastWheelTime = useRef(0);
  const handleWheel = useCallback((e) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 200) return;
    
    if (e.deltaY > 15) {
      lastWheelTime.current = now;
      navigation.navigateGrid("DOWN");
    } else if (e.deltaY < -15) {
      lastWheelTime.current = now;
      navigation.navigateGrid("UP");
    }
  }, [navigation.navigateGrid]);

  const isHeroCollapsed = navigation.isHeroCollapsed;

  return (
    <div className={`tv-screen ${isHeroCollapsed ? "hero-collapsed" : ""}`}>
      {/* LEFT SIDEBAR navigation menu */}
      <Sidebar
        activeRegion={navigation.activeRegion}
        activeCol={navigation.activeCol}
        sidebarFocused={navigation.sidebarFocused}
        syncMouseFocus={navigation.syncMouseFocus}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* MAIN VIEWPORT */}
      <div className="tv-viewport" onWheel={handleWheel}>
        {/* Dynamic Immersive Background HUD overlay */}
        <div className="tv-hud-overlay">
          <div className="tv-branding-text">SAMSUNG UG</div>
          <div className="tv-time">
            <Wifi size={14} style={{ color: "rgba(255, 255, 255, 0.6)" }} />
            <span>{localTime}</span>
          </div>
        </div>

        {/* CENTER TOP CAPSULE NAVIGATION PILL */}
        <TopNavBar
          activeRegion={navigation.activeRegion}
          activeCol={navigation.activeCol}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          syncMouseFocus={navigation.syncMouseFocus}
        />

        {/* CINEMATIC HERO BANNER */}
        {activeTab !== "apps" && activeTab !== "vac" && (
          <HeroBanner
            focusedMedia={navigation.focusedMedia}
            activeRegion={navigation.activeRegion}
            activeCol={navigation.activeCol}
            isHeroCollapsed={isHeroCollapsed}
            syncMouseFocus={navigation.syncMouseFocus}
          />
        )}

        {/* SCROLLABLE CONTENT AREA — shelves scroll naturally via DOM */}
        {activeTab !== "vac" ? (
          <div className={`tv-content-scroll-area ${isHeroCollapsed ? "expanded" : ""} ${activeTab === "apps" ? "apps-mode" : ""}`}>
            <ShelvesList
              shelfContainerRef={navigation.shelvesRef}
              layoutData={layoutData}
              activeRegion={navigation.activeRegion}
              activeCol={navigation.activeCol}
              activeRow={navigation.activeRow}
              syncMouseFocus={navigation.syncMouseFocus}
              shelfRefs={navigation.shelfRefs}
              activeTab={activeTab}
              isLoading={isLoading}
            />
          </div>
        ) : (
          /* Futuristic Vision AI Companion Dashboard (VAC) */
          <div className="vision-ai-dashboard">
            <div className="vision-ai-grid">
              {/* Left Panel: Camera Feed Scanner */}
              <div className="vision-feed-panel">
                <div className="vision-camera-feed">
                  <div className="vision-scanner-line"></div>
                  <div className="vision-bounding-box" style={{ top: "22%", left: "32%", width: "120px", height: "120px" }}>
                    <span className="vision-tag animate-pulse">User Detected: Active (99%)</span>
                  </div>
                  <div className="vision-bounding-box secondary" style={{ top: "60%", left: "15%", width: "200px", height: "80px" }}>
                    <span className="vision-tag">Sofa (94%)</span>
                  </div>
                  <div className="vision-bounding-box secondary" style={{ top: "45%", left: "65%", width: "120px", height: "100px" }}>
                    <span className="vision-tag">Coffee Table (88%)</span>
                  </div>
                  <div className="vision-feed-grid"></div>
                  <div className="vision-hud-status">
                    <span className="status-dot green"></span>
                    <span>VAC ENGINE: ONLINE (ACTIVE)</span>
                  </div>
                </div>
              </div>

              {/* Right Panel: AI Diagnostics & Mood Analysis */}
              <div className="vision-stats-panel">
                <h3 className="vision-panel-title">Vision AI Diagnostics</h3>
                
                <div className="vision-stat-card">
                  <span className="stat-label">Ambient Scene Detection</span>
                  <span className="stat-value text-cyan">Cozy Living Room</span>
                  <div className="stat-bar-bg">
                    <div className="stat-bar-fill" style={{ width: "98%" }}></div>
                  </div>
                </div>

                <div className="vision-stat-card">
                  <span className="stat-label">Viewer Mood Analysis</span>
                  <span className="stat-value text-green">Relaxed & Engaged</span>
                  <div className="stat-bar-bg">
                    <div className="stat-bar-fill" style={{ width: "85%", backgroundColor: "#4caf50" }}></div>
                  </div>
                </div>

                <div className="vision-recommendation-card">
                  <h4 className="rec-title text-cyan">Vision AI Recommendations</h4>
                  <p className="rec-desc">
                    Relaxed mood detected. Ambient sunset light and calm audio content are recommended.
                  </p>
                  <div className="rec-pill-row">
                    <span className="rec-pill">Sunset Ambient Mode</span>
                    <span className="rec-pill">Cinematic Soundtrack</span>
                    <span className="rec-pill">Vision TV Recommendation</span>
                  </div>
                </div>

                <div className="vision-hud-footer">
                  <span className="status-label">SYS TEMP: </span>
                  <span className="status-val text-green">42°C</span>
                  <span style={{ margin: "0 8px" }}>|</span>
                  <span className="status-label">AI LATENCY: </span>
                  <span className="status-val text-cyan">4.2ms</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Toggling visual hint banner when remote-only mode active */}
      {!mouseNavEnabled && (
        <div 
          style={{
            position: "absolute",
            bottom: "20px",
            left: "90px",
            background: "rgba(3, 8, 18, 0.8)",
            border: "1px solid rgba(0, 229, 255, 0.3)",
            padding: "8px 16px",
            borderRadius: "12px",
            fontSize: "0.75rem",
            color: "var(--color-accent-cyan)",
            backdropFilter: "blur(10px)",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
            zIndex: 10
          }}
        >
          <Info size={14} />
          <span>Remote mode active. Use keyboard Arrow keys or the Virtual Remote HUD.</span>
        </div>
      )}
    </div>
  );
};
export default SamsungTvLayout;
