import Express from 'express';
const app = Express();
const PORT = 3000;
import { userRoute } from './src/routes/user.routes.js'

// Routes --- 

app.use(userRoute());

app.listen(PORT, () => { console.log(`Escuchando puerto ${PORT}`) });
 