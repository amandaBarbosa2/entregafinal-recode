import React from "react"
import { Link } from "react-router-dom"
<Link to="./Assets/css/style.css" />

export default function Menu() {
    return (
        <nav class="Menu" id="menu">
            <ul>
                <Link to="/"><img src="./imagens/agenciaVoe.jpg" class="rosa" alt="logo Agência de Viagens" /></Link>
                <Link to="/Destinos" class="nav">Destinos</Link>
                <Link to="/Promocoes" class="nav">Promoções</Link>
                <Link to="/Contato" class="nav">Contato</Link>
            </ul>
           
        </nav>
    );
}