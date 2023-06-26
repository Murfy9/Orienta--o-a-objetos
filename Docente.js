import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} aprovado(a) no curso ${curso}.`;
  }
}

const novoDocente = new Docente("Mariana", "m@m.com", "1978/06/26");
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante("Juliana", "JS"));
