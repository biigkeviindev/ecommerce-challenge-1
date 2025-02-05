import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const producttestInfo = {
  basePrice: 100,
  brand: "apple",
  id: "0",
  imageUrl: "url",
  name: "iphone 13 test",
};

describe("Test ProductCard component", () => {
  (useRouter as jest.Mock).mockReturnValue({
    push: jest.fn(),
  });

  test("Should render component", () => {
    render(renderSut(<ProductCard product={producttestInfo} />));

    expect(screen.getByText("100 EUR"));
    expect(screen.queryByRole("span", { name: /apple/i }));
  });
});

function renderSut(children: ReactNode) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
