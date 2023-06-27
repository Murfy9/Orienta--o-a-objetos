import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User("Marina", "m@m.com", "2022/08/26");
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Rodrigo", "r@R.com", "2002/03/08");
console.log(novoAdmin.nome);
novoAdmin.nome = "Pedro";
console.log(novoAdmin.nome);

// const novoUser = new User("Pedro", "Xavier", "px@px.com", "2020-01-09");
// console.log(novoUser.nome); //'Pedro'
// novoUser.nome = "Pedro Xavier";
// console.log(novoUser.nome); //'Pedro'
// console.log(novoUser.sobrenome); //'Xavier'
