import React from "react";
import './estilo.css'

export default function Topo() {
    return (
        <header className="limite">
            <img src="./imagens/logo.png" />

            <nav>
                <a href="#produtos">Produtos</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contatos</a>
            </nav>
        </header>
    )
}