import React from "react";
import './header.css'
function Header() {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#" className="brand-logo">Inicio</a>
                <a href="#" className="brand-logo">Ventimenta</a>
                <a href="#" className="brand-logo">Ropa</a>
                <a href="#" className="brand-logo">Personalizados</a>
                <a href="#" className="brand-logo">Contactonos</a>
            </div>
        </nav>
    );
}

export default Header;
