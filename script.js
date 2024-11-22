const botaoHamburguer = document.querySelector("#hamburgerBotao");
const botaoFechar = document.querySelector("#fecharBotao");
const menuCelular = document.querySelector("#celularMenu");

botaoHamburguer.addEventListener("click", function () {
  menuCelular.classList.add("flex");
});

botaoFechar.addEventListener("click", function () {
  menuCelular.classList.remove("flex");
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateTelefone(telefone) {
  const re = /^\(\d{2}\) \d{5}-\d{4}$/;
  return re.test(telefone);
}

