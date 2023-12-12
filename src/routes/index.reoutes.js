import Express from 'express';
import { mensajeHomeUno, mensajeHomeDos } from '../controllers/index.controllers.js';

const indexRoute = Express.Router();



indexRoute.get('/', mensajeHomeUno);
indexRoute.get('/2doHome', mensajeHomeDos);


export default indexRoute;
