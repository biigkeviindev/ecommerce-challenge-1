import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import NavigationBar from "../components/NavigationBar";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { CartProvider } from "@/contexts/CartContext";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("NavigationBar component", () => {
  (useRouter as jest.Mock).mockReturnValue({
    push: jest.fn(),
  });

  test("Should render navigationBar", () => {
    render(resSut(<NavigationBar showCart={true}></NavigationBar>));

    const logo = screen.getByRole("img", { name: "Cart icon" });
    expect(logo).toBeInTheDocument();
  });

  test("Should hide cart when prop is false", () => {
    render(resSut(<NavigationBar showCart={false}></NavigationBar>));
    const logo = screen.queryByRole("img", { name: "Cart icon" });
    expect(logo).not.toBeInTheDocument();
  });
});

function resSut(children: ReactNode) {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CartProvider>
  );
}
