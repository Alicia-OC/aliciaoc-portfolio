import { useEffect, useRef } from "react";

// Custom hook to auto-toggle sidebar on mobile devices
function useMobileToggle(toggleSidebar, isSidebarClosed) {
  const lastManualToggle = useRef(Date.now());
  const hasInitialized = useRef(false);

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 768;
      const timeSinceLastManualToggle = Date.now() - lastManualToggle.current;

      // Only auto-close on initial mount or actual resize events
      if (timeSinceLastManualToggle > 500 && hasInitialized.current) {
        if (isMobile && !isSidebarClosed) {
          toggleSidebar();
        }
      }
    }

    // Check on mount
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      handleResize();
    }

    // Add resize listener with debounce
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 20);
    };

    window.addEventListener("resize", debouncedResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, [toggleSidebar]);

  // Return a function to call when user manually toggles
  const handleManualToggle = () => {
    lastManualToggle.current = Date.now();
    toggleSidebar();
  };

  return handleManualToggle;
}

export default useMobileToggle;
