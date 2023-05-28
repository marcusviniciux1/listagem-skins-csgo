const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const imagemBotaoCsLogo = document.querySelector(".logo");

botaoAlterarTema.addEventListener("click", () => {
    const modoClaroEstaAtivo = body.classList.contains("modo-claro");

    body.classList.toggle("modo-claro");

    if (modoClaroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
        imagemBotaoCsLogo.setAttribute("src", "./src/imagens/cslogodark.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
        imagemBotaoCsLogo.setAttribute("src", "./src/imagens/cslogo.png")
    }
})