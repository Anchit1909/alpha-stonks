import { create } from "zustand";

export const useDataStore = create((set) => ({
  tickerValue: "",
  setTickerValue: (tickerValue) => set({ tickerValue }),
}));
