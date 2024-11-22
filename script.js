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

function btnSendOnClick() {
 
  const txtNome = document.getElementById('inome');
  const txtTel = document.getElementById('itelefone');
  const txtEmail = document.getElementById('iemail');

  if (txtNome.value.trim() === "") {
      alert('Preenchimento obrigatório: Nome');
      txtNome.focus();
  }
  else if (txtTel.value.trim() === "") {
      alert('Preenchimento obrigatório: telefone');
      txtTel.focus();
  }
  else if (!validateEmail(txtEmail.value)) {
      alert('Preenchimento obrigatório: Email');
      txtEmail.value = '';
      txtEmail.focus();
  }
  else {
      alert('Mensagem enviada com sucesso!!')
      form.submit();
  }
}
