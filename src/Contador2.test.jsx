import { render, screen, fireEvent } from "@testing-library/react";
import Contador from "./Contador";

test("Incrementa y decrementa correctamente", () => {
  render(<Contador />);

  const btnInc = screen.getByText("Incrementar");
  const btnDec = screen.getByText("Decrementar");

  fireEvent.click(btnInc);
  expect(screen.getByText("Contador: 1")).toBeInTheDocument();

  fireEvent.click(btnDec);
  expect(screen.getByText("Contador: 0")).toBeInTheDocument();
});
