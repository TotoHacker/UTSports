import React from 'react';
import Header from './Componente/Header';
import Footer from './Componente/Footer';
import { data } from './Componente/data';

function Catalogo({ agregarAlCarrito, isLoggedIn }) {
  return (
    <div className='App'>
      <Header />
      <div className='ima'>
        {data.map((product) => (
          <div className='conten' key={product.id}>
            <div className='catalogo'>
              <img className='ImgCat' src={product.img} alt={product.nameProduct} />
              <p className='nombrepr'>{product.nameProduct}</p>
              <p className='preciopr'>${product.price}</p>
              {isLoggedIn ? (
                <a href={product.Pago} target='_blank' rel='noopener noreferrer'>
                  Pagar
                </a>
              ) : (
                <p>Inicia sesión para comprar</p>
              )}
              {isLoggedIn ? (
                <button onClick={() => agregarAlCarrito(product)}>Añadir al carrito</button>
              ) : (
                <button>Ver producto</button>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Catalogo;
