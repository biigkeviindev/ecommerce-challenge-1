import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { CatalogProvider } from "@/contexts/CatalogContext";
import { CartProvider } from "@/contexts/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CatalogProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </CatalogProvider>
    </QueryClientProvider>
  );
}
