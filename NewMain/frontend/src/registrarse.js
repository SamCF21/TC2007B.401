import React, { useState } from "react";
import "./registrarse.css";

const Registrarse = () => {
  const [datos, setDatos] = useState({
    username: "",
    password: "",
    fullName: "",
  });

  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSendData = async () => {
    // Convert the form data to JSON
    const request = await new Request("http://127.0.0.1:1338/registrarse", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
    } catch {
      throw new Error("No se pudo registrar el usuario");
    }
  };
  return (
    <div className="centered-container">
      <div className="registro-container">
        <h2>Registro de nuevos usuarios</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Usuario: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={datos.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={datos.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullName">Nombre Completo: </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={datos.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="aula">Aula: </label>
            <input
              type="text"
              id="aula"
              name="aula"
              value={datos.aula}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="permissions">Permisos: </label>
            <select
              id="permissions"
              name="permissions"
              value={datos.permissions}
              onChange={handleChange}
            >
              <option value="coordinador de aula">Coordinador de Aula</option>
              <option value="coordinador nacional">Coordinador Nacional</option>
              <option value="coordinador regional">Coordinador Regional</option>
            </select>
          </div>
          <div className="form-group">
            <button type="button" onClick={handleSendData}>
              Crear Usuario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registrarse;
