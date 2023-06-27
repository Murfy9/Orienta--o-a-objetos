export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }
  // Métodos

  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  exibirInfos() {
    const objUser = this.#montaObjUser();
    return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
  }
}

// O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
