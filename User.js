export default class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante";
    this.ativo = ativo;
  }
  // Método
  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

// O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
