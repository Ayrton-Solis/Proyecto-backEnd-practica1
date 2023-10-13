import Express from 'express';
import { mensajeHomeUno, mensajeHomeDos } from '../controllers/index.controllers.js';

const indexRoute = Express.Router();



indexRoute.get('/', mensajeHomeUno);
indexRoute.get('/home', mensajeHomeDos);


export default indexRoute;
