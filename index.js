import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Marina", "m@m.com", "2022/08/26");
console.log(novoUser.exibirInfos());
