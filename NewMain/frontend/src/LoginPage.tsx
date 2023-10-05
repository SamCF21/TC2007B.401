import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './authProvider'; // Asegúrate de importar el authProvider correctamente

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const history = useHistory();
  const authProvider = useAuth(); // Reemplaza esto con la forma en que obtienes el authProvider en tu aplicación

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await authProvider.login({ username, password });
      history.push('/dashboard'); // Redirige al usuario a la página principal después del inicio de sesión exitoso
    } catch (err) {
      setError('Error en usuario o contraseña. Por favor, inténtalo de nuevo.'); // Muestra un mensaje de error si la autenticación falla
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;






// import COVER_IMAGE from './Assets/COVER_IMAGE.png';

// const colors = {
//     primary : "#060606",
//     background : "#E0E0E0",
//     disabled: "D9D9D9"
// }

// const Login = () => {
//     return {
//         <div className = "w-full h-screen flex item-start">
//             <div className='relative w-1/2 h-full flex flex-col'> 
//                 <div className='absolute top-[25%] left-[10%] flex flex-col>
//                 <h1 className="text-4x1 text-white font-bold my-4"></h1>
//                 </div>
//                 <img src={COVER_IMAGE} className="w-full h-full object-cover" />
//             </div>
//         </div>
//     }
// }

// export default Login;