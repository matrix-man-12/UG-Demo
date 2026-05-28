import React from "react";
import ShelfCard from "./ShelfCard";

export const ShelvesList = ({ 
  shelfContainerRef,
  layoutData, 
  activeRegion, 
  activeCol, 
  activeRow, 
  syncMouseFocus, 
  shelfRefs, 
  activeTab, 
  isLoading 
}) => {

  // SKELETON LOADER SCREEN
  if (isLoading) {
    return (
      <div className="tv-shelves-container">
        <div className="skeleton-row">
          <div className="skeleton-title"></div>
          <div className="skeleton-cards">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="skeleton-card square">
                <div className="shimmer"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="skeleton-row">
          <div className="skeleton-title"></div>
          <div className="skeleton-cards">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="skeleton-card landscape">
                <div className="shimmer"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const shelves = layoutData?.shelves || [];

  return (
    <div className="tv-shelves-container" ref={shelfContainerRef}>
      {shelves.map((shelf, rowIndex) => {
        const isAppsShelf = shelf.type === "square";
        
        return (
          <div key={shelf.id} className="shelf-row" data-shelf-row={rowIndex}>
            <h3 className="shelf-title">
              {shelf.title}
              {shelf.id === "live_now" && (
                <span className="live-indicator">LIVE</span>
              )}
            </h3>
            
            <div 
              className="shelf-cards-scroller"
              ref={(el) => (shelfRefs.current[`shelf-${rowIndex}`] = el)}
            >
              {shelf.items.map((item, index) => (
                <ShelfCard
                  key={item.id}
                  item={item}
                  index={index}
                  rowIndex={rowIndex}
                  activeRegion={activeRegion}
                  activeCol={activeCol}
                  syncMouseFocus={syncMouseFocus}
                  type={isAppsShelf ? "square" : "landscape"}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ShelvesList;
