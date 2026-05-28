import { useState, useEffect, useCallback, useRef } from "react";
import { apiService } from "../services/apiService";

export const useTvNavigation = (initialTab = "for-you", layoutData, mouseModeDefault = true) => {
  const [activeRegion, setActiveRegion] = useState("shelf-0");
  const [activeRow, setActiveRow] = useState(0);
  const [activeCol, setActiveCol] = useState(0);
  const [sidebarFocused, setSidebarFocused] = useState(false);
  const [mouseNavEnabled, setMouseNavEnabled] = useState(mouseModeDefault);
  const [isHeroCollapsed, setIsHeroCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(initialTab);

  // References for horizontal scrolling of rows
  const shelfRefs = useRef({});
  // Reference for the scrollable viewport container
  const shelvesRef = useRef(null);

  // Reset focus state when active tab changes
  useEffect(() => {
    setActiveRegion("shelf-0");
    setActiveRow(0);
    setActiveCol(0);
    setIsHeroCollapsed(false);
  }, [activeTab]);

  // Sidebar items
  const sidebarCount = 6;
  // Hero buttons count
  const heroButtonsCount = 2;
  // Top nav items count
  const topNavCount = 4;

  // Auto-update Hero Banner when focusing items in Row 0
  const [focusedMedia, setFocusedMedia] = useState(null);

  // Find the first landscape shelf index for hero banner updates
  const firstLandscapeIndex = layoutData?.shelves?.findIndex(s => s.type !== "square") ?? -1;

  useEffect(() => {
    if (!layoutData || !layoutData.shelves || firstLandscapeIndex < 0) return;
    
    const shelfRegion = `shelf-${firstLandscapeIndex}`;
    if (activeRegion === shelfRegion && activeTab !== "apps") {
      const shelf = layoutData.shelves[firstLandscapeIndex];
      if (shelf && shelf.items && shelf.items[activeCol]) {
        const item = shelf.items[activeCol];
        setFocusedMedia(item);
        apiService.reportFocusAnalytics(item.id, item.title, shelf.title);
      }
    }
  }, [activeRegion, activeRow, activeCol, layoutData, activeTab, firstLandscapeIndex]);

  // Set focused media to first landscape item initially when layout loads
  useEffect(() => {
    if (layoutData && layoutData.shelves && firstLandscapeIndex >= 0) {
      const shelf = layoutData.shelves[firstLandscapeIndex];
      if (shelf && shelf.items && shelf.items[0] && activeTab !== "apps") {
        setFocusedMedia(shelf.items[0]);
      }
    }
  }, [layoutData, activeTab, firstLandscapeIndex]);

  // Function to smoothly center the active card horizontally in its shelf
  const scrollToFocusedItem = useCallback((region, colIndex) => {
    const container = shelfRefs.current[region];
    if (!container) return;

    const cards = container.children;
    if (!cards || cards.length === 0 || !cards[colIndex]) return;

    const activeCard = cards[colIndex];
    const containerWidth = container.offsetWidth;
    const cardWidth = activeCard.offsetWidth;
    const cardLeft = activeCard.offsetLeft;

    const targetScroll = cardLeft - (containerWidth / 2) + (cardWidth / 2);
    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: "smooth"
    });
  }, []);

  // Scroll the focused shelf row into view within the scrollable viewport
  const scrollRowIntoView = useCallback((rowIndex) => {
    // We use a small delay to let React re-render the DOM before scrolling
    requestAnimationFrame(() => {
      const rowEl = document.querySelector(`[data-shelf-row="${rowIndex}"]`);
      if (rowEl) {
        rowEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }, []);

  // Spatial navigation engine
  const navigateGrid = useCallback((direction) => {
    if (!layoutData || !layoutData.shelves) return;

    let nextRegion = activeRegion;
    let nextRow = activeRow;
    let nextCol = activeCol;
    
    const shelvesCount = layoutData.shelves.length;

    // SIDEBAR NAVIGATION
    if (activeRegion === "sidebar") {
      setSidebarFocused(true);
      if (direction === "UP") {
        nextCol = Math.max(0, activeCol - 1);
      } else if (direction === "DOWN") {
        nextCol = Math.min(sidebarCount - 1, activeCol + 1);
      } else if (direction === "RIGHT") {
        setSidebarFocused(false);
        nextRegion = "shelf-0";
        nextRow = 0;
        nextCol = 0;
      }
    }

    // TOP NAVIGATION CAPSULE PILL
    else if (activeRegion === "top-nav") {
      if (direction === "LEFT") {
        if (activeCol === 0) {
          nextRegion = "sidebar";
          nextCol = 4;
          setSidebarFocused(true);
        } else {
          nextCol = activeCol - 1;
        }
      } else if (direction === "RIGHT") {
        nextCol = Math.min(topNavCount - 1, activeCol + 1);
      } else if (direction === "DOWN") {
        if (activeTab === "apps") {
          nextRegion = "shelf-0";
          nextRow = 0;
          nextCol = 0;
        } else {
          nextRegion = "hero-buttons";
          nextCol = 0;
        }
      }
    }

    // HERO BUTTONS
    else if (activeRegion === "hero-buttons") {
      if (direction === "LEFT") {
        if (activeCol === 0) {
          nextRegion = "sidebar";
          nextCol = 4;
          setSidebarFocused(true);
        } else {
          nextCol = 0;
        }
      } else if (direction === "RIGHT") {
        nextCol = Math.min(heroButtonsCount - 1, activeCol + 1);
      } else if (direction === "UP") {
        nextRegion = "top-nav";
        nextCol = activeTab === "vac" ? 0 : activeTab === "for-you" ? 1 : activeTab === "live" ? 2 : 3;
      } else if (direction === "DOWN") {
        nextRegion = "shelf-0";
        nextRow = 0;
        nextCol = 0;
      }
    }

    // CONTENT SHELVES / ROWS
    else if (activeRegion.startsWith("shelf-")) {
      const currentShelfIndex = parseInt(activeRegion.split("-")[1], 10);
      const currentShelf = layoutData.shelves[currentShelfIndex];
      const itemsCount = currentShelf ? currentShelf.items.length : 0;

      if (direction === "LEFT") {
        if (activeCol === 0) {
          nextRegion = "sidebar";
          nextCol = 4;
          setSidebarFocused(true);
        } else {
          nextCol = Math.max(0, activeCol - 1);
          scrollToFocusedItem(activeRegion, nextCol);
        }
      } else if (direction === "RIGHT") {
        nextCol = Math.min(itemsCount - 1, activeCol + 1);
        scrollToFocusedItem(activeRegion, nextCol);
      } else if (direction === "UP") {
        if (currentShelfIndex === 0) {
          if (activeTab === "apps") {
            nextRegion = "top-nav";
            nextCol = 3;
          } else {
            nextRegion = "hero-buttons";
            nextCol = 0;
          }
        } else {
          const prevShelfIndex = currentShelfIndex - 1;
          const prevShelf = layoutData.shelves[prevShelfIndex];
          const prevItemsCount = prevShelf ? prevShelf.items.length : 0;
          
          nextRegion = `shelf-${prevShelfIndex}`;
          nextRow = prevShelfIndex;
          nextCol = Math.min(activeCol, prevItemsCount - 1);
          scrollToFocusedItem(nextRegion, nextCol);
          scrollRowIntoView(prevShelfIndex);
        }
      } else if (direction === "DOWN") {
        if (currentShelfIndex < shelvesCount - 1) {
          const nextShelfIndex = currentShelfIndex + 1;
          const nextShelf = layoutData.shelves[nextShelfIndex];
          const nextItemsCount = nextShelf ? nextShelf.items.length : 0;

          nextRegion = `shelf-${nextShelfIndex}`;
          nextRow = nextShelfIndex;
          nextCol = Math.min(activeCol, nextItemsCount - 1);
          scrollToFocusedItem(nextRegion, nextCol);
          scrollRowIntoView(nextShelfIndex);
        }
      }
    }

    // Determine hero collapse state: collapsed when any shelf beyond row 0 is active
    const isShelfDown = nextRegion.startsWith("shelf-") && parseInt(nextRegion.split("-")[1], 10) > 0;
    setIsHeroCollapsed(isShelfDown);

    setActiveRegion(nextRegion);
    setActiveRow(nextRow);
    setActiveCol(nextCol);
  }, [activeRegion, activeRow, activeCol, layoutData, activeTab, scrollToFocusedItem, scrollRowIntoView]);

  // Hook up global keyboard listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      
      switch (key) {
        case "ArrowUp":
          e.preventDefault();
          navigateGrid("UP");
          break;
        case "ArrowDown":
          e.preventDefault();
          navigateGrid("DOWN");
          break;
        case "ArrowLeft":
          e.preventDefault();
          navigateGrid("LEFT");
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateGrid("RIGHT");
          break;
        case "Enter":
          e.preventDefault();
          triggerSelection();
          break;
        case "Escape":
        case "Backspace":
          e.preventDefault();
          if (activeRegion !== "top-nav") {
            setActiveRegion("top-nav");
            setActiveCol(activeTab === "for-you" ? 0 : activeTab === "live" ? 1 : 2);
            setActiveRow(0);
            setIsHeroCollapsed(false);
            setSidebarFocused(false);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigateGrid, activeRegion, activeTab]);

  // Enter/Selection behavior
  const triggerSelection = useCallback(() => {
    if (activeRegion === "top-nav") {
      const tabs = ["vac", "for-you", "live", "apps"];
      setActiveTab(tabs[activeCol]);
    } else if (activeRegion === "sidebar") {
      if (activeCol === 0) alert("Profile selected!");
      if (activeCol === 1) alert("Search triggered!");
      if (activeCol === 4) setActiveTab("for-you");
      setSidebarFocused(false);
    } else if (activeRegion.startsWith("shelf-")) {
      const shelfIndex = parseInt(activeRegion.split("-")[1], 10);
      const shelf = layoutData?.shelves[shelfIndex];
      const item = shelf?.items[activeCol];
      if (item) {
        if (item.isApp) {
          alert(`Launching TV Application: ${item.title}`);
        } else {
          window.dispatchEvent(new CustomEvent("open-details", { detail: item }));
        }
      }
    } else if (activeRegion === "hero-buttons") {
      if (focusedMedia) {
        if (activeCol === 0) {
          alert(`Starting Fullscreen Video Playback of: ${focusedMedia.title}`);
        } else {
          window.dispatchEvent(new CustomEvent("open-details", { detail: focusedMedia }));
        }
      }
    }
  }, [activeRegion, activeCol, activeTab, layoutData, focusedMedia]);

  // Synchronize Mouse Focus Events (visual highlight only — no scroll/collapse)
  const syncMouseFocus = useCallback((region, colIndex, rowIndex = 0) => {
    if (!mouseNavEnabled) return;

    setActiveRegion(region);
    setActiveCol(colIndex);
    setActiveRow(rowIndex);

    if (region === "sidebar") {
      setSidebarFocused(true);
    } else {
      setSidebarFocused(false);
    }
  }, [mouseNavEnabled]);

  return {
    activeRegion,
    setActiveRegion,
    activeRow,
    setActiveRow,
    activeCol,
    setActiveCol,
    sidebarFocused,
    setSidebarFocused,
    isHeroCollapsed,
    setIsHeroCollapsed,
    activeTab,
    setActiveTab,
    focusedMedia,
    setFocusedMedia,
    mouseNavEnabled,
    setMouseNavEnabled,
    shelfRefs,
    shelvesRef,
    syncMouseFocus,
    triggerSelection,
    navigateGrid
  };
};
