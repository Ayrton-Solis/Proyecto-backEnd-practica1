import Express from "express";
const app = Express();



export function controller() {
  app.get((req, res) => {
    res.send('La conexion desde el router utilizando controller e import es correcta')
  });
}
