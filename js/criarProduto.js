// js/criarProduto.js

import { conectaApi } from './conectaApi.js';

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectaApi.criaProduto(nome, preco, imagem);
    window.location.reload();
})


