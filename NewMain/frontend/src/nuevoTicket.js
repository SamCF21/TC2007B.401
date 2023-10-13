import React, { useState } from "react";

const NuevoTicket = () => {
  const [datos, setDatos] = useState({
    coordinador: "",
    aula: "",
    fecha: "",  
    categoria: "",
    subcategoria: "",
    estatus: "",
    prioridad: "",
    numIntermediarios: "",
    numOficio: "",
    descripcion: "",
    comentario: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendData = async () => {
    console.log(JSON.stringify(datos));
    const request = await new Request("http://127.0.0.1:1338/tickets", {
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
      throw new Error("No se pudieron subir los datos");
    }
  };
  const {
    coordinador,
    aula,
    fecha,
    categoria,
    subcategoria,
    estatus,
    prioridad,
    numIntermediarios,
    numOficio,  
    descripcion,
    comentario,
  } = datos;
  return (
    <div>
      <h2>Nuevo ticket</h2>
      <form>
        <div>
          <label htmlFor="coordinador">Coordinador:</label>
          <input
            type="text"
            id="coordinador"
            name="coordinador"
            value={coordinador}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="aula">Aula:</label>
          <input
            type="text"
            id="aula"
            name="aula"
            value={aula}
            onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="text"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="categoria">Categoria:</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subcategoria">Subcategoria:</label>
          <input
            type="text"
            id="subcategoria"
            name="subcategoria"
            value={subcategoria}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="estatus">Estatus:</label>
          <input
            type="text"
            id="estatus"
            name="estatus"
            value={estatus}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="prioridad">Prioridad:</label>
          <input
            type="text"
            id="prioridad"
            name="prioridad"
            value={prioridad}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="numIntermediarios">Numero de Intermediarios:</label>
          <input
            type="text"
            id="numIntermediarios"
            name="numIntermediarios"
            value={numIntermediarios}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="numOficio">Numero de Oficio:</label>
          <input
            type="text"
            id="numOficio"
            name="numOficio"
            value={numOficio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripcion:</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="comentario">Comentario:</label>
          <input
            type="text"
            id="comentario"
            name="comentario"
            value={comentario}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleSendData}>
            Enviar Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default NuevoTicket;
