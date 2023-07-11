import React from "react";
function Header() {
    return (
        <header>
            <img className="Logo" src="Imagenes/Ut_Logo.png" alt="" />
            <nav>
            <div className="">
                <a href="#" className="textH">Inicio</a>
                <a href="#" className="textH">Ventimenta</a>
                <a href="#" className="textH">Personalizados</a>
                <a href="./index.html" className="textH">Equipo Deportivo</a>
                <a href="#" className="textH">Contactonos</a>
                <a href=""><span className="material-symbols-outlined iconHea">search</span></a>
                <a href=""><span className="material-symbols-outlined iconHea">person</span> </a>
                <a href="./carrito.html"><span class="material-symbols-outlined iconHea">shopping_cart</span></a>
            </div>
        </nav>
        </header>
        
    );
}

export default Header;
