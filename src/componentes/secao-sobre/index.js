import React from "react";
import './estilo.css'

export default function SobreNos() {
    return (
        <section className="secao-sobre" id="sobre">
            <div className="limite">
                <h2>Quem somos nós?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className="container">
                    <div className="cards">
                        <img src="./imagens/loja.png" />
                    </div>
                    <div className="cards"><h2>Nossas Filiais</h2>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="cards"><h2> Atendimento flexível</h2>
                    <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <div className="cards">
                    <img src="./imagens/atendimento.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}