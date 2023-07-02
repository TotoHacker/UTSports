import React from "react"
import Header from "./Componente/Header"
import Footer from "./Componente/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <img className="imgpre" src="imagenes/carrera.jpg" alt="" />
      </div>
      
      <Footer/>
    </div>
  );
}
export default App
