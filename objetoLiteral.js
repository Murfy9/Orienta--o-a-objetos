const user = {
  nome: "Pedro",
  email: "px@px.com",
  nascimento: "2022/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Mariana",
  email: "m@m.com",
  nascimento: "2020/05/26",
  role: "admin",
  ativo: true,
  criarCursos() {
    console.log("Curso Criado!");
  },
};

Object.setPrototypeOf(admin, user);
admin.criarCursos();
admin.exibirInfos();

// O que é this? podemos dizer que é literalmente “isso”. Então quando falamos this, “isso” é uma palavra que só faz sentido com contexto.

// O método bind é um método que usamos para prender a execução de uma função a um contexto específico.

// O método Object.setPrototypeOf() configura o 'prototype' (i.e., a propriedade interna [[Prototype]]) de um objeto específico para outro objeto ou null.
