import React, { useState } from 'react';
import Header from './Componente/Header';
import Footer from './Componente/Footer';
import { data } from './Componente/data';
import Catalogo from './Catalogo';
import Carrito from './Carrito';
import './App.css'; // Importamos el archivo de estilos CSS

function App() {
  // Estado para almacenar los productos agregados al carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (product) => {
    setCarrito([...carrito, product]);
  };

  return (
    <div className='App'>
      <Header />
      <Catalogo data={data} agregarAlCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} />
      <Footer />
    </div>
  );
}

export default App;
