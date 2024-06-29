// Cria cards para inserir novos produtos

const constroiCard = (id, nome, preco, imagem) => {
    const produtoCard = document.createElement('li');
    produtoCard.classList.add('produto-card');
    produtoCard.dataset.id = id;

    produtoCard.innerHTML = `
        <li class="card">
            <img src="${imagem}" alt="${nome}" class="img_card" />
            <h4>${nome}</h4>
            <div class="preco_container">
                <p>R$ ${preco}</p>
                <button class="icon_trash" data-delete>
                    <img src="./img/🦆 icon _trash 2_.png" alt="Excluir">
                </button>
            </div>
        </li> `;

    return produtoCard;
}

export default constroiCard


