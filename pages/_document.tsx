import NavigationBar from "@/features/layout/components/NavigationBar";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
