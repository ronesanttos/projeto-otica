import SecaoBanner from '../secao-banner';
import SecaoProdutos from '../secao-produtos';
import SobreNos from '../secao-sobre';
import SecaoContatos from '../secao-contato';

export default function Conteudo() {
    return (
        <main>
            <SecaoBanner />
            <SecaoProdutos />
            <SobreNos />
            <SecaoContatos />
        </main>
    )
}