import { render, screen } from "@testing-library/react";
import BarBack from "../components/BarBack";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ReactNode } from "react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("Render BarBack component", () => {
  (useRouter as jest.Mock).mockReturnValue({
    push: jest.fn(),
  });

  render(resSut(<BarBack uri="/" />));

  const image = screen.getByRole("img", { name: /Icon go back/i });

  expect(screen.getByText("BACK"));
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "/back.svg");
});

function resSut(children: ReactNode) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
