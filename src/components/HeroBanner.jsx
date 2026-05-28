import React from "react";
import { Play, Info } from "lucide-react";

export const HeroBanner = ({ 
  focusedMedia, 
  activeRegion, 
  activeCol, 
  isHeroCollapsed, 
  syncMouseFocus 
}) => {
  // If no media is currently selected or focused, use a high-quality default
  const defaultMedia = {
    id: "reacher",
    title: "Reacher",
    brand: "Prime Video",
    brandColor: "#00A8E1",
    backdrop: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=1600&q=80",
    rating: "IMDb 8.1",
    year: "2024",
    seasons: "2 Seasons",
    resolution: "4K UHD",
    tags: ["Action", "Crime", "Thriller"],
    description: "Veteran military police investigator Jack Reacher is falsely accused of murder and finds himself in the middle of a deadly conspiracy full of dirty cop, shady businessmen and scheming politicians.",
    actionText: "Watch Now"
  };

  const media = focusedMedia || defaultMedia;

  const handleMouseEnter = (index) => {
    syncMouseFocus("hero-buttons", index, 0);
  };

  const handleButtonClick = (action) => {
    if (action === "More Info") {
      window.dispatchEvent(new CustomEvent("open-details", { detail: media }));
    } else {
      alert(`Triggered action: "${action}" for ${media.title}`);
    }
  };

  return (
    <div className={`hero-banner ${isHeroCollapsed ? "collapsed" : ""}`}>
      {/* Immersive cinematic backdrop */}
      <div 
        className="hero-backdrop" 
        style={{ backgroundImage: `url(${media.backdrop || media.imageUrl})` }}
      />
      
      <div className="hero-content">
        {/* Brand Tag (e.g. Prime Video or Netflix) */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span 
            className="brand-badge" 
            style={{ backgroundColor: media.brandColor || "#00A8E1" }}
          >
            {media.brand}
          </span>
          {media.liveShow && (
            <span className="brand-badge" style={{ backgroundColor: "#ff3838" }}>
              LIVE CHANNEL
            </span>
          )}
        </div>

        {/* Dynamic Title Treatment */}
        {media.logo ? (
          <img src={media.logo} alt={media.title} className="hero-logo-img" onError={(e) => { e.target.style.display = 'none'; }} />
        ) : (
          <h1 className="hero-title-text">{media.title}</h1>
        )}

        {media.liveShow && (
          <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-accent-cyan)" }}>
            {media.liveShow}
          </h2>
        )}

        {/* Quality and Rating Tags */}
        <div className="hero-metadata">
          <span className="rating-badge">{media.rating}</span>
          <span>{media.year}</span>
          <span>{media.seasons || media.duration}</span>
          <span className="resolution-badge">{media.resolution}</span>
          {media.tags && (
            <span style={{ color: "#a4b5cb" }}>• {media.tags.join(", ")}</span>
          )}
        </div>

        {/* Detailed show description */}
        <p className="hero-description">{media.description}</p>

        {/* Primary/Secondary action buttons */}
        <div className="hero-buttons">
          <button
            className={`hero-btn hero-btn-primary ${
              activeRegion === "hero-buttons" && activeCol === 0 ? "focused" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(0)}
            onClick={() => handleButtonClick(media.actionText || "Watch Now")}
          >
            <Play size={18} fill="currentColor" />
            <span>{media.actionText || "Watch Now"}</span>
          </button>
          
          <button
            className={`hero-btn hero-btn-secondary ${
              activeRegion === "hero-buttons" && activeCol === 1 ? "focused" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onClick={() => handleButtonClick("More Info")}
          >
            <Info size={18} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
