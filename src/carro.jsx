// Carrito.jsx
import React from 'react';
import Header from './Componente/Header';
import Footer from './Componente/Footer';

const Carrito = ({ carrito }) => {
  return (
    <div className='carrito'>
      <Header />
      <h2>Carrito de Compra</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {carrito.map((product) => (
            <li key={product.id}>
              <img src={product.img} alt={product.nameProduct} />
              <p>{product.nameProduct}</p>
              <p>${product.price}</p>
              <button>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
};

export default Carrito;
