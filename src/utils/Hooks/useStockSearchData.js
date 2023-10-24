import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useStockSearchData = (searchKey) => {
  const SECRET_KEY = process.env.NEXT_PUBLIC_ALPHA_API_KEY;
  const URL = ` ${"https://www.alphavantage.co/query?function="}${"SYMBOL_SEARCH"}&keywords=${searchKey}&apikey=${SECRET_KEY}`;
  return useQuery({
    queryKey: ["SYMBOL_SEARCH", searchKey],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      if (data.Note) {
        throw new Error(data.Note);
      } else if (data.Information) {
        throw new Error(data.Information);
      }

      return data.bestMatches;
    },
    staleTime: 5 * 60 * 1000,
  });
};
