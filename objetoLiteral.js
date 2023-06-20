const user = {
  nome: "Pedro",
  email: "px@px.com",
  nascimento: "2022/01/01",
  role: "admin",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

// user.exibirInfos();
// const exibir = user.exibirInfos
// exibir()

const exibir = function () {
  console.log(this.nome);
};

const exibirNome = exibir.bind(user);
exibirNome();
exibir();

// O que é this? podemos dizer que é literalmente “isso”. Então quando falamos this, “isso” é uma palavra que só faz sentido com contexto.

// O método bind é um método que usamos para prender a execução de uma função a um contexto específico.
