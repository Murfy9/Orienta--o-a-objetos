import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
  }
}

// A palavra-chave super é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.

// Polimorfismo é a possibilidade dessas subclasses usarem um método, mas com o comportamento interno diferente.

// SOLID: S - princípio da responsabilidade única que é cada parte do código, cada módulo ela faz uma coisa só, ela só tem uma responsabilidade,
// O - princípio do aberto/fechado significa que a classe tem que estar aberta para ser expandida, porém fechada, para ser modificada.
// L - princípio da substituição de Liskov significa que se uma classe tem um atributo, a subclasse dela também tem que ter. Se algo funciona na superclasse, tem que funcionar na subclasse também.
// I - princípio de segregação de interface significa que clientes não devem ser forçados a depender de interfaces que eles não usam.
// D - princípio da inversão de dependência fala sobre justamente encapsularmos as coisas, escondermos como determinada função funciona, etc;
