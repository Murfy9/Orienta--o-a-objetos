// function User(nome, email) {
//   this.nome = nome;
//   this.email = email;

//   this.exibirInfos = function () {
//     return `${this.nome}, ${this.email}`;
//   };
// }

// function Admin(role) {
//   User.call(this, "Pedro", "px@px.com");
//   this.role = role || "estudante";
// }

// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin("admin");
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

const user = {
  init: function (nome, email) {
    this.nome = nome;
    this.email = email;
  },

  exibirInfos: function () {
    return this.nome;
  },
};

const novoUser = Object.create(user);
novoUser.init("Pedro", "px@px.com");
console.log(novoUser.exibirInfos());

// O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this. Ou seja, é possível atribuir um this diferente do contexto atual ao executar a função.

// O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array:
