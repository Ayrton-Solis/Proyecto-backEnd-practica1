import Express from 'express';
import { controller } from '../controllers/index.controllers.js';
const router = Express.Router();


export function userRoute() {

  router.get('/', controller());

}; 
