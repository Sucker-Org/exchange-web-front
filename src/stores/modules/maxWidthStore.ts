import { create } from "zustand";

// Step 1: Define the store's state and actions
interface MaxWidthState {
  maxWidth: "xl" | "lg";
  setMaxWidth: (value: "xl" | "lg") => void;
}

// Step 2: Create the store
const useMaxWidthStore = create<MaxWidthState>(set => ({
  maxWidth: "xl", // Default state
  setMaxWidth: value => set(() => ({ maxWidth: value }))
}));

// Step 3: Add a subscription to window resize events
const updateMaxWidthOnResize = () => {
  const updateMaxWidth = () => {
    const lgBreakpoint = 1280;
    useMaxWidthStore.getState().setMaxWidth(window.innerWidth >= lgBreakpoint ? "xl" : "lg");
  };

  window.addEventListener("resize", updateMaxWidth);
  updateMaxWidth(); // Set initial value based on current window size

  // Cleanup function to remove the event listener
  return () => window.removeEventListener("resize", updateMaxWidth);
};
updateMaxWidthOnResize();
