class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante";
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

const novoUser = new User("Pedro", "px@px.com", "2001/01/01");
console.log(novoUser);
console.log(novoUser.exibirInfos());
