import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useStockChartData = (symbol) => {
  const SECRET_KEY = process.env.NEXT_PUBLIC_ALPHA_API_KEY;
  const URL = ` ${"https://www.alphavantage.co/query?function="}${"TIME_SERIES_WEEKLY_ADJUSTED"}&symbol=${symbol}&apikey=${SECRET_KEY}`;
  return useQuery({
    queryKey: ["TIME_SERIES_WEEKLY_ADJUSTED", symbol],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      if (data.Note) {
        throw new Error(data.Note);
      } else if (data.Information) {
        throw new Error(data.Information);
      }

      return data;
    },
    staleTime: 5 * 60 * 1000, //5 Minutes
  });
};
