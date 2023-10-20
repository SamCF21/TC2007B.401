import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MyLoginPage from "./MyLoginPage"; 

describe("MyLoginPage", () => {
  it("renders the login page", () => {
    render(<MyLoginPage />);

    
    expect(screen.getByText("nombre de usuario")).toBeInTheDocument();
    expect(screen.getByText("contraseña")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("handles form input and submission", async () => {
    render(<MyLoginPage />);

   
    const usernameInput = screen.getByPlaceholderText("nombre de usuario");
    const passwordInput = screen.getByPlaceholderText("contraseña");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

  
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    
    
  });
});
