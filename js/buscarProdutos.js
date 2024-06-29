// Renderização e exclusão de produtos.js

import { conectaApi } from './conectaApi.js';
import constroiCard from './construirCards.js';

const lista = document.querySelector("[data-lista]");

const renderizaProdutos = async () => {
    const produtos = await conectaApi.listaProdutos();

    produtos.forEach(elemento => {
        const card = constroiCard(elemento.id, elemento.nome, elemento.preco, elemento.imagem);

        card.querySelector("[data-delete]").addEventListener("click", async () => {
            await conectaApi.deletaProduto(elemento.id);
            card.remove();
        });
        lista.appendChild(card);
    });
}

renderizaProdutos()

