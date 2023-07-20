import React, { useState } from 'react';
import Header from './Componente/Header';
import Footer from './Componente/Footer';
import LoginForm from './LoginForm'; // Importa el componente de inicio de sesión

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Establece el estado de inicio de sesión
  const [errorMessage, setErrorMessage] = useState(''); // Estado local para el mensaje de error

  // Función para manejar el inicio de sesión
  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserName: username, Password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        setErrorMessage(''); // Limpia el mensaje de error si el inicio de sesión fue exitoso
      } else {
        setErrorMessage('Credenciales inválidas');
      }
    } catch (error) {
      // Manejo de errores de la API
      setErrorMessage('Error al conectar con el servidor');
    }
  };

  return (
    <div className='App'>
      <Header isLoggedIn={isLoggedIn} /> {/* Pasa la variable isLoggedIn como prop */}
      <div className='Sesion'>
        <h1>Iniciar sesión</h1>
        {/* Usa el componente de inicio de sesión y pasa la función handleLogin como prop */}
        <LoginForm handleLogin={handleLogin} />
        <p>{errorMessage}</p> {/* Muestra el mensaje de error */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
