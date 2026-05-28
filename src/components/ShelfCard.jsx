import React from "react";
import { Play } from "lucide-react";

export const ShelfCard = ({ 
  item, 
  index, 
  rowIndex, 
  activeRegion, 
  activeCol, 
  syncMouseFocus, 
  type = "landscape" 
}) => {
  const isFocused = activeRegion === `shelf-${rowIndex}` && activeCol === index;

  const handleMouseEnter = () => {
    syncMouseFocus(`shelf-${rowIndex}`, index, rowIndex);
  };

  const handleCardClick = () => {
    if (item.isApp) {
      alert(`Launching Application: ${item.title}`);
    } else {
      window.dispatchEvent(new CustomEvent("open-details", { detail: item }));
    }
  };

  // SQUARE CARD TYPE (Apps)
  if (type === "square") {
    return (
      <div
        className={`shelf-card square ${isFocused ? "focused" : ""}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleCardClick}
      >
        <img 
          src={item.iconUrl} 
          alt={item.title} 
          className="app-logo"
          style={item.invertIcon ? { filter: "invert(1)" } : {}}
          onError={(e) => { e.target.src = "https://img.icons8.com/fluency/512/tv.png"; }}
        />
        <span className="app-title-text">{item.title}</span>
      </div>
    );
  }

  // LANDSCAPE CARD TYPE (Movies, Series, Channels)
  const showProgress = item.progress !== undefined;
  
  return (
    <div
      className={`shelf-card landscape ${isFocused ? "focused" : ""}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleCardClick}
    >
      <div className="card-img-wrapper">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="card-img"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80"; }}
        />
        
        {/* Glow overlay with metadata info */}
        <div className="card-overlay">
          <span className="card-title-text">{item.title}</span>
          
          <div className="card-subtext">
            {item.liveShow ? (
              <span style={{ color: "var(--color-accent-cyan)", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ display: "inline-block", width: "6px", height: "6px", backgroundColor: "#ff3838", borderRadius: "50%" }}></span>
                LIVE • {item.liveShow}
              </span>
            ) : (
              <>
                <span style={{ color: item.brandColor || "#00A8E1", fontWeight: "700" }}>{item.brand}</span>
                <span>•</span>
                <span>{item.rating || item.resolution}</span>
              </>
            )}
          </div>
        </div>

        {/* Video progress indicator (for Continue Watching or Live channels) */}
        {showProgress && (
          <div className="card-progress-bar">
            <div 
              className="card-progress-fill" 
              style={{ 
                width: `${item.progress}%`,
                backgroundColor: item.liveShow ? "var(--color-accent-orange)" : "var(--color-accent-blue)" 
              }}
            />
          </div>
        )}

        {/* Dynamic focus overlay icon */}
        {isFocused && (
          <div 
            style={{ 
              position: "absolute", 
              top: "10px", 
              right: "10px", 
              backgroundColor: "rgba(0, 229, 255, 0.9)", 
              borderRadius: "50%", 
              width: "28px", 
              height: "28px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
              color: "#030812",
              zIndex: 10
            }}
          >
            <Play size={14} fill="currentColor" />
          </div>
        )}
      </div>
    </div>
  );
};
export default ShelfCard;
