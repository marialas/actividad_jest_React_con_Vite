import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("Formulario completo: escribir y enviar", () => {
  const mockSubmit = jest.fn();

  render(<LoginForm onSubmit={mockSubmit} />);

  const emailInput = screen.getByLabelText("email");
  const passwordInput = screen.getByLabelText("password");
  const submitButton = screen.getByText("Iniciar sesión");

  expect(submitButton).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: "test@mail.com" } });
  fireEvent.change(passwordInput, { target: { value: "12345" } });

  expect(submitButton).toBeEnabled();

  fireEvent.click(submitButton);

  expect(mockSubmit).toHaveBeenCalledWith({
    email: "test@mail.com",
    password: "12345",
  });
});
