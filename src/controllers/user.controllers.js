// Importa que la desestructuracion sea de esta manera porque sino da error por alguna razon desconocida.
import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'Nezuko23',
  database: 'firstapi',
  port: '5432'
});

export class users {

  static async getUsers(req, res) {
    try {
      const response = await pool.query('select * from users');
      console.log(response.rows);
      res.json(response.rows);
    }catch (error) {
      console.log(error);
    };
  };

  static async createUsers(req, res) {
    try {
      const { name, email } = req.body;
      const response = await pool.query('insert into users (name, email) values ($1, $2)', [name, email]);
      console.log(response);
      res.send('User Created');
    }catch (error) {
      console.log(error);
    };
  };

  static async getUserById(req, res) {
    try {
      const id = req.params.id;
      const response = await pool.query('select * from users where id = $1', [id]);
      console.log(response.rows);
      res.send(response.rows);
    }catch (error) {
      console.log(error);
    };
  };

  static async deleteUserById(req, res) {
    try {
      const id = req.params.id;
      const response = await pool.query('delete from users where id = $1', [id]);
      console.log(response);
      res.send(`Usuario con id ${id} eliminado correctamente`);
    }catch (error) {
      console.log(error);
    };
  };

  static async updateUserById(req, res) {
    try {
      const id = req.params.id;
      const { name, email } = req.body;
      const response = await pool.query('update users set name = $1, email = $2 where id = $3', [name, email, id]);
      console.log(response);
      res.send('Usuario actualizado correctamente');
    }catch (error) {
      console.log(error);
    };
  };
};