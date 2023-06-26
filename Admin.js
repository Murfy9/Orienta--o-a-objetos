import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
}

const novoAdmin = new Admin("Rodrigo", "rg@r.com", "1998/03/07");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
