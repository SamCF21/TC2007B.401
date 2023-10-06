import * as React from "react";
import { useState } from "react";
import { useLogin, useNotify } from "react-admin";

const MyLoginPage = ({ theme }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login({ username, password });
    } catch (error) {
      notify("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="username" style={styles.label}>
                Nombre de Usuario
              </label>
              <input
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nombre de Usuario"
                style={styles.inputField}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>
                Contraseña
              </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                style={styles.inputField}
              />
            </div>
            <button type="submit" style={styles.submitButton}>
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: 'url("/src/Assets/COVER_IMAGE.png")', // Ruta de tu imagen de fondo
    backgroundSize: "cover",
    position: "fixed",
    width: "100%",
    height: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "300px",
  },
  heading: {
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "10px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    width: "100%",
  },
};

export default MyLoginPage;
