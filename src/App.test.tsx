import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders invoice list", () => {
  render(<App />);
  const invoicesHeading = screen.getByText(/Invoices/i);
  expect(invoicesHeading).toBeInTheDocument();
});
