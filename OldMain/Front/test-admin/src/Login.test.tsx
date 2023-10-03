import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from './Login'; 
import '@testing-library/jest-dom'; 

describe('Login Page Component', () => {
  it('should handle form submission', () => {
    const { getByLabelText, getByText } = render(<LoginPage />);
    
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

  });
});
