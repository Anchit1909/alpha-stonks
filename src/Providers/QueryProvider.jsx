"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

const QueryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};

export default function QueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient(QueryClientOptions));
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
