import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDataStore = create(
  persist(
    (set) => ({
      tickerValue: "",
      tickerPrice: "",
      tickerChangePercentage: "",
      growthValue: "",
      searchHistory: [],
      setTickerValue: (tickerValue) => set({ tickerValue }),
      setTickerPrice: (tickerPrice) => set({ tickerPrice }),
      setTickerChangePercentage: (tickerChangePercentage) =>
        set({ tickerChangePercentage }),
      setGrowthValue: (growthValue) => set({ growthValue }),
      // Function to add a search to the history without duplicates
      addSearchToHistory: (searchQuery) => {
        set((state) => {
          // Check if the search query is already in the history
          if (!state.searchHistory.includes(searchQuery)) {
            const updatedSearchHistory = [searchQuery, ...state.searchHistory];
            // Keep only the last 4 searches
            const limitedSearchHistory = updatedSearchHistory.slice(0, 4);
            return { searchHistory: limitedSearchHistory };
          }
          // If it's a duplicate, return the existing state without any changes
          return state;
        });
      },
    }),
    { name: "ticker-storage" }
  )
);
