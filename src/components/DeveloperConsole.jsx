import React, { useState, useEffect } from "react";
import { Terminal, Database, Sliders, RefreshCw, X, ChevronLeft, ChevronRight } from "lucide-react";
import { apiService, getApiLogs, clearApiLogs } from "../services/apiService";

export const DeveloperConsole = ({ 
  activeTab, 
  apiLatency, 
  setApiLatency, 
  onLayoutMutated 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState([]);
  const [rawData, setRawData] = useState({});
  const [rowToEdit, setRowToEdit] = useState("recommended");
  const [newTitleText, setNewTitleText] = useState("");

  // Sync API log lists
  const syncLogs = () => {
    setLogs([...getApiLogs()]);
  };

  // Sync JSON Viewer Data
  const syncRawData = () => {
    setRawData(apiService.getRawData(activeTab));
  };

  useEffect(() => {
    syncLogs();
    syncRawData();

    // Listen for database changes or logging actions
    window.addEventListener("api-log-updated", syncLogs);
    window.addEventListener("db-updated", () => {
      syncRawData();
      if (onLayoutMutated) onLayoutMutated(); // Refresh main layout card grid
    });

    return () => {
      window.removeEventListener("api-log-updated", syncLogs);
      window.removeEventListener("db-updated", syncRawData);
    };
  }, [activeTab, onLayoutMutated]);

  // Refresh whenever tab updates
  useEffect(() => {
    syncRawData();
  }, [activeTab]);

  const handleApplyTitle = (e) => {
    e.preventDefault();
    if (!newTitleText.trim()) return;
    
    // Determine shelf target ID
    let targetShelfId = rowToEdit;
    if (activeTab === "live") targetShelfId = "live_now";
    if (activeTab === "apps") targetShelfId = "apps_grid";

    const success = apiService.updateRowTitle(activeTab, targetShelfId, newTitleText);
    if (success) {
      setNewTitleText("");
      alert(`Successfully mutated API JSON! Changed title of ${targetShelfId} row.`);
    } else {
      alert("Error: Selected row not found in active tab.");
    }
  };

  const handleClearLogs = () => {
    clearApiLogs();
  };

  if (!isOpen) {
    return (
      <button 
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          background: "#090e18",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRight: "none",
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
          padding: "16px 8px",
          color: "var(--color-accent-blue)",
          cursor: "pointer",
          zIndex: 199,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          boxShadow: "-5px 0 15px rgba(0,0,0,0.5)"
        }}
        onClick={() => setIsOpen(true)}
      >
        <ChevronLeft size={16} />
        <span style={{ writingMode: "vertical-lr", textTransform: "uppercase", fontSize: "0.65rem", fontWeight: "800", letterSpacing: "1px" }}>Dev Panel</span>
      </button>
    );
  }

  return (
    <div className="developer-console">
      {/* Header Panel */}
      <div className="console-header">
        <h2>
          <Terminal size={18} className="latency-value" />
          <span>API & Layout Console</span>
        </h2>
        
        <button className="console-close-btn" onClick={() => setIsOpen(false)}>
          <X size={18} />
        </button>
      </div>

      <div className="console-content">
        {/* Latency Simulator Slider */}
        <div>
          <h3 className="console-section-title">
            <Sliders size={12} style={{ marginRight: "6px" }} />
            API Latency Simulator
          </h3>
          
          <div className="slider-group">
            <div className="slider-header">
              <span>Simulated Network Latency</span>
              <span className="latency-value">{apiLatency}ms</span>
            </div>
            
            <input 
              type="range" 
              min="0" 
              max="3000" 
              step="250"
              value={apiLatency}
              onChange={(e) => setApiLatency(parseInt(e.target.value, 10))}
              className="console-slider"
            />
            
            <span style={{ fontSize: "0.6rem", color: "#4a5568", display: "block", marginTop: "6px" }}>
              *Sets delay before media/grid data fetches to trigger shimmer skeleton layouts.
            </span>
          </div>
        </div>

        {/* Live Active JSON Mutator */}
        <div>
          <h3 className="console-section-title">
            <RefreshCw size={12} style={{ marginRight: "6px" }} />
            API JSON Title Mutator
          </h3>
          
          <form className="db-mutator" onSubmit={handleApplyTitle}>
            {activeTab === "for-you" && (
              <select 
                className="input-field" 
                value={rowToEdit} 
                onChange={(e) => setRowToEdit(e.target.value)}
              >
                <option value="recommended">Recommended Row (Row 0)</option>
                <option value="apps">Quick Launch Apps (Row 1)</option>
                <option value="continue">Continue Watching (Row 2)</option>
              </select>
            )}
            
            {activeTab === "live" && (
              <select className="input-field" disabled>
                <option value="live_now">Live TV Channels (Row 0)</option>
              </select>
            )}

            {activeTab === "apps" && (
              <select className="input-field" disabled>
                <option value="apps_grid">All TV Applications (Grid)</option>
              </select>
            )}

            <input 
              type="text" 
              placeholder="Enter new Row Title" 
              className="input-field"
              value={newTitleText}
              onChange={(e) => setNewTitleText(e.target.value)}
            />
            
            <button type="submit" className="mutator-btn">
              Apply PATCH /api/v1/layout
            </button>
          </form>
        </div>

        {/* Real-time Network Log Console */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <h3 className="console-section-title" style={{ margin: 0 }}>
              <Terminal size={12} style={{ marginRight: "6px" }} />
              API Server Request Logs
            </h3>
            <button 
              onClick={handleClearLogs}
              style={{ background: "transparent", border: "none", color: "#e57373", fontSize: "0.65rem", cursor: "pointer", fontWeight: "700" }}
            >
              Clear Logs
            </button>
          </div>

          <div className="log-viewer">
            {logs.length === 0 ? (
              <span style={{ color: "#4a5568", fontStyle: "italic" }}>No API requests captured yet. Move focused items!</span>
            ) : (
              logs.map((log) => (
                <div key={log.id} className="log-item">
                  <div className="log-item-meta">
                    <span className={`log-method ${log.method}`}>{log.method}</span>
                    <span className="log-latency">{log.duration}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#90a4ae" }}>
                    <span>{log.endpoint}</span>
                    <span className="log-status">{log.status}</span>
                  </div>
                  <span className="log-details">{log.details}</span>
                  <span className="log-time" style={{ fontSize: "0.6rem" }}>{log.timestamp}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Live raw JSON viewer */}
        <div>
          <h3 className="console-section-title">
            <Database size={12} style={{ marginRight: "6px" }} />
            Active JSON Payload Response
          </h3>
          
          <div className="json-inspector">
            <pre>
              <code>{JSON.stringify(rawData, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeveloperConsole;
