import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";

test("Render BarBack component", () => {
  render(
    <Layout>
      <p>Test Layout</p>
    </Layout>
  );

  expect(screen.getByText("Test Layout"));
});
