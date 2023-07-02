import React from "react";
import './estilo.css'

export default function SecaoContatos() {
    return (

        <section className="secao-contatos" id="contato">
            <div className="limite">
                <h1>Fale conosco</h1>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="contatos">
                    <ul>
                        <span>Contato</span>
                        <div className="box">
                            <img src="/imagens/local.png"/>
                            <li> Nova Iguaçu, RJ</li>
                        </div>

                        <div className="box">
                            <img src="/imagens/telefone.png"/>
                            <li>(21) 9999 - 9999</li>
                        </div>

                        <div className="box">
                            <img src="/imagens/email.png"/>
                            <li>contato@oticavida.com</li>
                        </div>
                    </ul>

                    <ul>
                        <span>Nossas Redes Sociais</span>
                        <div className="box">
                            <img src="/imagens/fb.png"/>
                            <li>/OticaVida</li>
                        </div>

                        <div className="box">
                            <img src="/imagens/ig.png"/>
                            <li>@oticavidarj</li>
                        </div>

                        <div className="box">
                            <img src="/imagens/tt.png"/>
                            <li>@oticavidarj</li>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}