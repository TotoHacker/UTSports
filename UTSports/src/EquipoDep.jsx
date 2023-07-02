import React from "react"
import Header from "./Componente/Header"
import Footer from "./Componente/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="ima">
        <img className="imgpre" src="imagenes/carrera.jpg" alt="" />
      </div>
      <h1>Equipo Deportivo</h1>
      <div className="conten">
        <div className="catalogo">
          <img className="ImgCat" src="Imagenes/Ut_Logo.png" alt="" />
          <p className="nombrepr">Nombre Producto</p>
          <p className="preciopr">Precio Producto</p>
        </div>
        <div className="catalogo">
          <img className="ImgCat" src="Imagenes/Ut_Logo.png" alt="" />
          <p className="nombrepr">Nombre Producto</p>
          <p className="preciopr">Precio Producto</p>
        </div>
        <div className="catalogo">
          <img className="ImgCat" src="Imagenes/Ut_Logo.png" alt="" />
          <p className="nombrepr">Nombre Producto</p>
          <p className="preciopr">Precio Producto</p>
        </div>
      </div>
      <div className="conten">
        <div className="catalogo">
          <img className="ImgCat" src="Imagenes/Ut_Logo.png" alt="" />
          <p className="nombrepr">Nombre Producto</p>
          <p className="preciopr">Precio Producto</p>
        </div>
        <div className="catalogo">
          <img className="ImgCat" src="Imagenes/Ut_Logo.png" alt="" />
          <p className="nombrepr">Nombre Producto</p>
          <p className="preciopr">Precio Producto</p>
        </div>
        <div className="catalogo">
          <img  className="ImgCat"src="Imagenes/Ut_Logo.png" alt="" />
          <p className="nombrepr">Nombre Producto</p>
          <p className="preciopr">Precio Producto</p>
        </div>
      </div>
      <div className="conten">
        <div className="catalogo">
          <img className="ImgCat" src="Imagenes/Ut_Logo.png" alt="" />
          <p className="nombrepr">Nombre Producto</p>
          <p className="preciopr">Precio Producto</p>
        </div>
        <div className="catalogo">
          <img className="ImgCat" src="Imagenes/Ut_Logo.png" alt="" />
          <p className="nombrepr">Nombre Producto</p>
          <p className="preciopr">Precio Producto</p>
        </div>
        <div className="catalogo">
          <img  className="ImgCat"src="Imagenes/Ut_Logo.png" alt="" />
          <p className="nombrepr">Nombre Producto</p>
          <p className="preciopr">Precio Producto</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default App
