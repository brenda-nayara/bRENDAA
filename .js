const botoes = document.querySelectorAll(".botao");
const conteudos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remove a classe "ativo" de todos os botões e abas
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            conteudos[j].classList.remove("ativo");
        }

        // Adiciona "ativo" no botão clicado e no conteúdo correspondente
        botoes[i].classList.add("ativo");
        conteudos[i].classList.add("ativo");
    }
}
