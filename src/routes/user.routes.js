import Express from 'express';
import { users } from '../controllers/user.controllers.js';

const userRoute = Express.Router();


//  ---- user routs ----
userRoute.get('/user', users.getUsers);
userRoute.post('/user', users.createUsers);

// ---- userById routs ----
userRoute.get('/user/:id', users.getUserById);
userRoute.delete('/user/:id', users.deleteUserById);
userRoute.put('/user/:id', users.updateUserById);

export default userRoute;