import React, { useState } from 'react';

function LoginForm({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-container'>
        <p id='Usua'>Usuario</p>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='input-container'>
        <p id='Password'>Contraseña</p>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type='submit'>Iniciar sesión</button>
      <a href=''>Registrarse</a>
    </form>
  );
}

export default LoginForm;
