import { screen, render } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ReactNode } from "react";
import ProductCarousel from "../components/ProductCarousel";
import { Product_array } from "./json/product";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Test ProductCarousel test", () => {
  (useRouter as jest.Mock).mockReturnValue({
    push: jest.fn(),
  });

  test("Should render card", () => {
    render(renderSut(<ProductCarousel products={Product_array} />));
    const cardtitle = screen.findByText("Galaxy S24 Ultra");
    expect(cardtitle);
  });
});

function renderSut(children: ReactNode) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
