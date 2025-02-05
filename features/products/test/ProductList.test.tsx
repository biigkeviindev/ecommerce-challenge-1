import { screen, render } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ReactNode } from "react";
import ProductCarousel from "../components/ProductCarousel";
import { Product_array } from "./json/product";
import { useRouter } from "next/router";
import ProductList from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";
import { CatalogProvider } from "@/contexts/CatalogContext";

jest.mock("../hooks/useProducts");

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Test ProductCarousel test", () => {
  (useRouter as jest.Mock).mockReturnValue({
    push: jest.fn(),
  });

  (useProducts as jest.Mock).mockReturnValue({ data: Product_array });
  test("Should render card", () => {
    render(renderSut(<ProductList />));
    const cardtitle = screen.findByText("Galaxy S24 Ultra");
    expect(cardtitle);
  });
});

function renderSut(children: ReactNode) {
  return (
    <CatalogProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CatalogProvider>
  );
}
