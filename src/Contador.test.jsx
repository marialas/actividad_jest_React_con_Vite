import { render, screen } from "@testing-library/react";
import Contador from "./Contador";

test("Renderiza el estado inicial y botones", () => {
  render(<Contador />);

  expect(screen.getByText("Contador: 0")).toBeInTheDocument();
  expect(screen.getByText("Incrementar")).toBeInTheDocument();
  expect(screen.getByText("Decrementar")).toBeInTheDocument();
});
