import fs from 'fs/promises';
// ruta de la base de datos
const routDatabase = './database.txt';

export class user {

  static async saveData(req, res){
    // Obtener los usuarios de la database
    const users = await user.getAll();
    // Creacion del nuevo usuario
    const newUser = {
      name: req.body.name,
      lastName: req.body.lastName
    };
    // Ingresar el usuario al array
    users.push(newUser);
    // Guardar el usuario nuevo a la base de datos
    try {
      await fs.writeFile(routDatabase, JSON.stringify(users))
    }catch (error) { // Manejo del error
      console.log(error);
    }
    users.forEach(user => { res.send(`hola señor/a ${ user.name + ' ' + user.lastName }`) });
  };

  static async getAll(){
    // Obtener los usuario de la database
    try {
      const users = await fs.readFile(routDatabase, 'utf-8')
      return JSON.parse(users);
    }catch (error) { // Manejo del error
      console.log(error); 
    };
  };

  static async show(req, res){
    try {
      // Obtener todos los usuarios
      const array = await fs.readFile(routDatabase, 'utf-8');
      // JSON.parse para mostrar en console.log y JSON.stringify para mostrarlo por res.send
      const users = JSON.parse(array);
      // Saludar a todos los usuarios uno por uno
      res.send(`Buenas tardes ${users}`)
      users.forEach(user => {console.log( `Hola señor/a ${ user.name + ' ' + user.lastName}`)});
    }catch (error) {
      console.log(error);
    };
  };
};
