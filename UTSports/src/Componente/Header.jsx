import React from "react";
function Header() {
    return (
        <header>
            <img className="Logo" src="Imagenes/Ut_Logo.png" alt="" />
            <nav>
            <div className="">
                <a href="#" className="">Inicio</a>
                <a href="#" className="">Ventimenta</a>
                <a href="#" className="">Ropa</a>
                <a href="#" className="">Personalizados</a>
                <a href="#" className="">Contactonos</a>
                <span class="material-symbols-outlined">search</span>
                <span class="material-symbols-outlined">person</span>
            </div>
        </nav>
        </header>
        
    );
}

export default Header;
