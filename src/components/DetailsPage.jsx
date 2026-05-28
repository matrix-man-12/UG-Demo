import React, { useState, useEffect, useRef } from "react";
import { Play, Plus, X, ArrowLeft, Star, Clock, Tv } from "lucide-react";

export const DetailsPage = ({ media, onClose }) => {
  const [focusedIndex, setFocusedIndex] = useState(0); // 0: Play, 1: Add, 2: Back, 3+: Similar Cards
  const [activeRegion, setActiveRegion] = useState("buttons"); // 'buttons' or 'similar'
  const [similarFocusCol, setSimilarFocusCol] = useState(0);

  // Open a similar item's own details page
  const openSimilarDetails = (item) => {
    window.dispatchEvent(new CustomEvent("open-details", { detail: item }));
  };

  // Realistic similar items with full details data
  const similarItems = [
    { id: "similar_1", title: "Citadel", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 6.8", year: "2023", seasons: "1 Season", resolution: "4K UHD", description: "Formerly elite agents of a global spy agency, who had their memories wiped, must work together to piece together their past.", imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80", backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80" },
    { id: "similar_2", title: "Jack Ryan", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.0", year: "2023", seasons: "4 Seasons", resolution: "4K UHD", description: "CIA analyst Jack Ryan is thrust into a dangerous field assignment for the first time, uncovering a pattern in terrorist communication.", imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80", backdrop: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=80" },
    { id: "similar_3", title: "The Boys", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.7", year: "2024", seasons: "4 Seasons", resolution: "4K UHD", description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers in a world where they are revered as heroes.", imageUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=400&q=80", backdrop: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1600&q=80" },
    { id: "similar_4", title: "Stranger Things", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.7", year: "2025", seasons: "5 Seasons", resolution: "4K UHD", description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.", imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80", backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80" },
    { id: "similar_5", title: "John Wick 4", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 7.7", year: "2023", duration: "2h 49m", resolution: "4K UHD", description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, he must face a new enemy with powerful alliances across the globe.", imageUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=400&q=80", backdrop: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1600&q=80" }
  ];

  // Map keyboard navigation on the details page
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (key === "Escape" || key === "Backspace") {
        e.preventDefault();
        onClose();
        return;
      }

      if (activeRegion === "buttons") {
        if (key === "ArrowRight") {
          e.preventDefault();
          setFocusedIndex((prev) => Math.min(2, prev + 1));
        } else if (key === "ArrowLeft") {
          e.preventDefault();
          setFocusedIndex((prev) => Math.max(0, prev - 1));
        } else if (key === "ArrowDown") {
          e.preventDefault();
          setActiveRegion("similar");
          setSimilarFocusCol(0);
        } else if (key === "Enter") {
          e.preventDefault();
          if (focusedIndex === 0) alert(`Playing: ${media.title}`);
          if (focusedIndex === 1) alert("Added to your Watchlist!");
          if (focusedIndex === 2) onClose();
        }
      } else if (activeRegion === "similar") {
        if (key === "ArrowRight") {
          e.preventDefault();
          setSimilarFocusCol((prev) => Math.min(similarItems.length - 1, prev + 1));
        } else if (key === "ArrowLeft") {
          e.preventDefault();
          setSimilarFocusCol((prev) => Math.max(0, prev - 1));
        } else if (key === "ArrowUp") {
          e.preventDefault();
          setActiveRegion("buttons");
          setFocusedIndex(0);
        } else if (key === "Enter") {
          e.preventDefault();
          openSimilarDetails(similarItems[similarFocusCol]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeRegion, focusedIndex, similarFocusCol, media, onClose]);

  return (
    <div className="details-page-overlay">
      {/* Background wallpaper */}
      <div 
        className="details-backdrop"
        style={{ backgroundImage: `url(${media.backdrop || media.imageUrl})` }}
      />
      <div className="details-overlay-gradient" />

      {/* Main Container */}
      <div className="details-wrapper">
        {/* Back Button HUD */}
        <button className="details-back-hud" onClick={onClose}>
          <ArrowLeft size={16} />
          <span>Return to Home</span>
        </button>

        {/* Two-column layout: text left, poster right */}
        <div className="details-body">
          {/* Content Panel (left) */}
          <div className="details-main-content">
            <span 
              className="brand-badge" 
              style={{ backgroundColor: media.brandColor || "#00A8E1", width: "max-content" }}
            >
              {media.brand}
            </span>

            <h1 className="details-title">{media.title}</h1>
            
            {media.liveShow && (
              <h2 className="details-live-subtitle">
                LIVE NOW: {media.liveShow}
              </h2>
            )}

            {/* Tags */}
            <div className="details-meta-row">
              <span className="rating-badge" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Star size={12} fill="currentColor" /> {media.rating}
              </span>
              <span>•</span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Clock size={12} /> {media.year}
              </span>
              <span>•</span>
              <span>{media.seasons || media.duration}</span>
              <span>•</span>
              <span className="resolution-badge">{media.resolution}</span>
            </div>

            <p className="details-synopsis">{media.description}</p>

            {/* Interactive buttons */}
            <div className="details-action-buttons">
              <button 
                className={`details-btn btn-primary ${activeRegion === "buttons" && focusedIndex === 0 ? "focused" : ""}`}
                onMouseEnter={() => { setActiveRegion("buttons"); setFocusedIndex(0); }}
                onClick={() => alert(`Starting Video Stream of ${media.title}`)}
              >
                <Play size={18} fill="currentColor" />
                <span>{media.actionText || "Play Now"}</span>
              </button>

              <button 
                className={`details-btn btn-secondary ${activeRegion === "buttons" && focusedIndex === 1 ? "focused" : ""}`}
                onMouseEnter={() => { setActiveRegion("buttons"); setFocusedIndex(1); }}
                onClick={() => alert("Added to Playlist!")}
              >
                <Plus size={18} />
                <span>Add to Watchlist</span>
              </button>

              <button 
                className={`details-btn btn-close ${activeRegion === "buttons" && focusedIndex === 2 ? "focused" : ""}`}
                onMouseEnter={() => { setActiveRegion("buttons"); setFocusedIndex(2); }}
                onClick={onClose}
              >
                <X size={18} />
                <span>Close</span>
              </button>
            </div>
          </div>

          {/* Poster Image (right) */}
          <div className="details-poster-wrap">
            <img 
              src={media.backdrop || media.imageUrl} 
              alt={media.title} 
              className="details-poster-img"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80"; }}
            />
            <div className="details-poster-border-glow"></div>
          </div>
        </div>

        {/* Similar Movies Carousel Shelf */}
        <div className="details-similar-shelf">
          <h3 className="details-similar-title">Customers Also Watched</h3>
          <div className="details-similar-scroller">
            {similarItems.map((item, index) => {
              const isFocused = activeRegion === "similar" && similarFocusCol === index;
              return (
                <div 
                  key={item.id}
                  className={`similar-card ${isFocused ? "focused" : ""}`}
                  onMouseEnter={() => { setActiveRegion("similar"); setSimilarFocusCol(index); }}
                  onClick={() => openSimilarDetails(item)}
                >
                  <div className="similar-card-img-wrap">
                    <img src={item.imageUrl} alt={item.title} className="similar-card-img" />
                    <div className="similar-card-overlay">
                      <span className="similar-title-text">{item.title}</span>
                      <span className="similar-sub-text">{item.brand} • {item.rating}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPage;
