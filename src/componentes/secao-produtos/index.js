import React from "react"
import './estilo.css'

export default function SecaoProdutos() {
    return (
        <section className="secao-produtos" id="produtos">
            <div className="limite">
                <h1>Nossos produtos</h1>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

                <div className="container">

                    <div className="card">
                        <h1>óculos de grau</h1>
                        <img src="./imagens/oculos01.png" />
                        <h2>R$ 500,00</h2>
                    </div>
                    <div className="card">
                        <h1>Óculos transition</h1>
                        <img src="./imagens/oculos02.png" />
                        <h2>R$ 750,00</h2>
                    </div>

                    <div className="card">
                        <h1>Óculos de sol</h1>
                        <img src="./imagens/oculos03.png" />
                        <h2>R$ 700,00</h2>
                    </div>

                    <div className="card">
                        <h1>Óculos infantil</h1>
                        <img src="./imagens/oculos04.png" />
                        <h2>R$ 500,00</h2>
                    </div>

                </div>

                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>

        </section>
    )
}