import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Registrarse from "./registrarse.js";

describe("Registrarse", () => {
  it("renders the registration form", () => {
    render(<Registrarse />);
    expect(screen.getByText("Registro de nuevos usuarios")).toBeInTheDocument();
    expect(screen.getByLabelText("Usuario:")).toBeInTheDocument();
    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    expect(screen.getByLabelText("Nombre Completo:")).toBeInTheDocument();
    expect(screen.getByText("Crear Usuario")).toBeInTheDocument();
  });

  it("handles form input and submission", async () => {
    render(<Registrarse />);
    
    const usernameInput = screen.getByLabelText("Usuario:");
    const passwordInput = screen.getByLabelText("Password:");
    const fullNameInput = screen.getByLabelText("Nombre Completo:");
    
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.change(fullNameInput, { target: { value: "Test User" } });
    
    const createButton = screen.getByText("Crear Usuario");
    fireEvent.click(createButton);


    await waitFor(() => {
  
    });
  });
});

