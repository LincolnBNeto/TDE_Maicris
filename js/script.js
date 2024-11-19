const botaoHamburguer = document.querySelector("#hamburgerBotao");
const botaoFechar = document.querySelector("#fecharBotao");
const menuCelular = document.querySelector("#celularMenu");

botaoHamburguer.addEventListener("click", function () {
  menuCelular.classList.add("flex");
});

botaoFechar.addEventListener("click", function () {
  menuCelular.classList.remove("flex");
});