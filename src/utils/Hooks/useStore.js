import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDataStore = create(
  persist(
    (set) => ({
      tickerValue: "",
      tickerPrice: "",
      tickerChangePercentage: "",
      growthValue: "",
      setTickerValue: (tickerValue) => set({ tickerValue }),
      setTickerPrice: (tickerPrice) => set({ tickerPrice }),
      setTickerChangePercentage: (tickerChangePercentage) =>
        set({ tickerChangePercentage }),
      setGrowthValue: (growthValue) => set({ growthValue }),
    }),
    { name: "ticker-storage" }
  )
);
