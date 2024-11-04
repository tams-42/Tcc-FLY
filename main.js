const precos = {
    'quantidade-pudim': 6.00,
    'quantidade-brigadeiro': 6.00,
    'quantidade-beijinho': 6.00,
    'quantidade-brownie': 6.00,
    'quantidade-limao': 6.00,
    'quantidade-cheesecake': 6.00,
};

// Função para atualizar o preço total do doce correspondente
function atualizarPrecoTotal(input) {
    const quantidade = parseInt(input.value) || 0;
    const precoProduto = precos[input.id];
    const valorTotal = quantidade * precoProduto;

    // Atualiza o preço total para o produto correspondente
    const precoTotalElement = input.closest('.swiper-slide').querySelector('.preco-valor');
    precoTotalElement.innerHTML = `R$ ${valorTotal.toFixed(2)}`;
}

// Função para excluir uma unidade
function excluirUmaUnidade(event) {
    // Encontra o input correspondente
    const input = event.target.closest('.swiper-slide').querySelector('.quantidade-produto');

    // Diminui a quantidade
    let quantidadeAtual = parseInt(input.value) || 0;
    if (quantidadeAtual > 0) {
        // Diminui uma unidade
        quantidadeAtual--;
        // Atualiza o valor do input
        input.value = quantidadeAtual;
        atualizarPrecoTotal(input);
    }
}

// Adiciona eventos de controle para cada botão de excluir
const buttonsExcluir = document.querySelectorAll('.excluir');
buttonsExcluir.forEach(button => {
    button.addEventListener('click', excluirUmaUnidade);
});

function evitarNumerosNegativos(event) {
    const input = event.target;
    if (parseInt(input.value) < 0) {
        // Define para 0 se o valor for negativo
        input.value = 0;
    }
}

// Adiciona o evento de controle para cada input de quantidade
const inputsQuantidade = document.querySelectorAll('.quantidade-produto');
inputsQuantidade.forEach(input => {
    input.addEventListener('change', () => {
        // Atualiza o preço total
        atualizarPrecoTotal(input);
        // Chama a função para evitar números
        evitarNumerosNegativos(event); negativos
    });
});