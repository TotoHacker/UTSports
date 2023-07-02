import React from "react";
function Header() {
    return (
        <header>
            <img className="Logo" src="Imagenes/Ut_Logo.png" alt="" />
            <nav>
            <div className="">
                <a href="#" className="textH">Inicio</a>
                <a href="#" className="textH">Ventimenta</a>
                <a href="#" className="textH">Ropa</a>
                <a href="#" className="textH">Personalizados</a>
                <a href="#" className="textH">Equipo Deportivo</a>
                <a href="#" className="textH">Contactonos</a>
                <span class="material-symbols-outlined">search</span>
                <span class="material-symbols-outlined">person</span>
            </div>
        </nav>
        </header>
        
    );
}

export default Header;
