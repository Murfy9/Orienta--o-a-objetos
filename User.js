export default class User {
  #nome;
  #sobrenome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#sobrenome = sobrenome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  // Acessors: Getters e Setters.

  get nome() {
    return this.#nome;
  }

  // Um getter é um tipo de função especial, que é somente leitura, ela apenas retorna uma propriedade da classe.

  get sobrenome() {
    return this.#sobrenome;
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

  // Setter são para alterar e validar essas alterações antes que elas sejam feitas nas propriedades que são privadas, de uma forma segura.

  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("Formato não válido!");
    }
    let [nome, ...sobrenome] = novoNome.split(" ");
    sobrenome = sobrenome.join(" ");
    this.#nome = novoNome;
    this.#sobrenome = sobrenome;
  }

  // Método

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
  }
}

// O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.

// Encapsulamento, é a ação de “esconder” os atributos de uma classe.

// Atributos privados são o que chamamos quando ele (propriedades && métodos) não está acessível do lado de fora da classe.
