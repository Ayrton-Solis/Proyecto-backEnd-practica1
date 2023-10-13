import Express from 'express';
import { user } from '../controllers/user.controllers.js';

const userRoute = Express.Router();


//  ---- user routs ---- 
userRoute.get('/user', );

//  ---- user id routs ----
userRoute.get('/user:id', user.show);
userRoute.post('/user:id', user.saveData);


export default userRoute;