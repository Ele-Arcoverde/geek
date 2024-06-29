// Centralização das requisições do projeto

const conexao = 'http://localhost:3000/produtos';

export const listaProdutos = async () => {
    try {
        const response = await fetch(conexao);
        if (!response.ok) throw new Error('Erro ao buscar produtos');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const criaProduto = async (nome, preco, imagem) => {
    try {
        const response = await fetch(conexao, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                preco,
                imagem
            })
        });
        if (!response.ok) throw new Error('Não foi possível enviar o produto');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const buscaProduto = async (termoDeBusca) => {
    try {
        const response = await fetch(`${conexao}?q=${termoDeBusca}`);
        if (!response.ok) throw new Error('Erro ao buscar produtos');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const deletaProduto = async (id) => {
    try {
        const response = await fetch(`${conexao}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Erro ao deletar produto');
    } catch (error) {
        console.error(error);
    }
}

export const conectaApi = {
    listaProdutos,
    criaProduto,
    buscaProduto,
    deletaProduto
} 

