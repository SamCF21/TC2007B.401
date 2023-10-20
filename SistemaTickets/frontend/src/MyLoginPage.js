import * as React from "react";
import { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import fundacionLogo from "./Assets/fundacionLogo.png";
import backgroundMexico from "./Assets/backgroundMexico.png";

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

  const styles = {
    body: {
      position: "absolute",
      top: "-20px",
      left: "-20px",
      right: "-40px",
      bottom: "-40px",
      width: "auto",
      height: "auto",
      backgroundImage:
        "url(https://www.ciudadania-express.com/archivos/articulos/2019/12/7731_20191211111508.png)",
      backgroundSize: "cover",
      WebkitFilter: "blur(5px)",
      zIndex: 0,
    },
    grad: {
      position: "absolute",
      top: "-20px",
      left: "-20px",
      right: "-40px",
      bottom: "-40px",
      width: "auto",
      height: "auto",
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)",
      zIndex: 1,
      opacity: 0.7,
    },
    header: {
      position: "absolute",
      top: "calc(50% - 35px)",
      left: "calc(50% - 255px)",
      zIndex: 2,
    },
    headerDiv: {
      float: "left",
      color: "#fff",
      fontFamily: "Exo, sans-serif",
      fontSize: "35px",
      fontWeight: 200,
    },
    headerSpan: {
      color: "#5379fa",
    },
    login: {
      position: "absolute",
      top: "calc(50% - 75px)",
      left: "calc(50% - 50px)",
      height: "150px",
      width: "350px",
      padding: "10px",
      zIndex: 2,
    },
    inputField: {
      width: "250px",
      height: "30px",
      background: "transparent",
      border: "none",
      border: "2px solid rgba(255, 255, 255, 0.6)",
      color: "#fff",
      fontFamily: "Exo, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      padding: "4px",
      marginTop: "10px",
      outline: "none",
    },
    loginButton: {
      width: "250px",
      height: "35px",
      background: "#fff",
      border: "none",
      cursor: "pointer",
      borderRadius: "2px",
      color: "#a18d6c",
      fontFamily: "Exo, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      padding: "6px",
      marginTop: "10px",
      outline: "none",
    },
    inputPlaceholder: {
      color: "rgba(255, 255, 255, 0.6)",
    },
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          {`
            body {
              margin: 0;
              padding: 0;
              background: transparent;
              color: #fff;
              font-family: Arial;
              font-size: 12px;
            }
          `}
        </style>
      </head>
      <body>
        <div style={styles.body}></div>
        <div style={styles.grad}></div>
        <div style={styles.header}>
          <img
            src={fundacionLogo}
            alt="Logo Fundación por Mexico"
            style={{
              width: "200px",
              margin: "-35px auto 0 auto",
            }}
          />
        </div>
        <br />
        <div style={styles.login}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="nombre de usuario"
              name="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                ...styles.inputField,
                color: "white",
              }}
            />
            <br />
            <input
              type="password"
              placeholder="contraseña"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                ...styles.inputField,
                color: "white",
              }}
            />
            <br />
            <input type="submit" value="Iniciar sesión" style={styles.loginButton} />
          </form>
        </div>
      </body>
    </html>
  );
};

export default MyLoginPage;

// "url(http://ginva.com/wp-content/uploads/2012/07/city-skyline-wallpapers-008.jpg)"
// import * as React from "react";
// import { useState } from "react";
// import { useLogin, useNotify } from "react-admin";

// const MyLoginPage = ({ theme }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const login = useLogin();
//   const notify = useNotify();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await login({ username, password });
//     } catch (error) {
//       notify("Nombre de usuario o contraseña incorrectos");
//     }
//   };

//   return (
//     <div style={styles.background}>
//       <div style={styles.container}>
//         <div style={styles.formContainer}>
//           <h2 style={styles.heading}>Iniciar Sesión</h2>
//           <form onSubmit={handleSubmit}>
//             <div style={styles.formGroup}>
//               <label htmlFor="username" style={styles.label}>
//                 Nombre de Usuario
//               </label>
//               <input
//                 name="username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Nombre de Usuario"
//                 style={styles.inputField}
//               />
//             </div>
//             <div style={styles.formGroup}>
//               <label htmlFor="password" style={styles.label}>
//                 Contraseña
//               </label>
//               <input
//                 name="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Contraseña"
//                 style={styles.inputField}
//               />
//             </div>
//             <button type="submit" style={styles.submitButton}>
//               Iniciar Sesión
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   background: {
//     backgroundImage: 'url("/src/Assets/COVER_IMAGE.png")', // Ruta de tu imagen de fondo
//     backgroundSize: "cover",
//     position: "fixed",
//     width: "100%",
//     height: "100%",
//   },
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//   },
//   formContainer: {
//     backgroundColor: "rgba(255, 255, 255, 0.8)",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     width: "300px",
//   },
//   heading: {
//     textAlign: "center",
//   },
//   formGroup: {
//     marginBottom: "10px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//   },
//   inputField: {
//     width: "100%",
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "3px",
//   },
//   submitButton: {
//     backgroundColor: "#007bff",
//     color: "#fff",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "3px",
//     cursor: "pointer",
//     width: "100%",
//   },
// };

// export default MyLoginPage;
