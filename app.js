import indexRoute from './src/routes/index.reoutes.js';
import userRoute from './src/routes/user.routes.js'
import Express from 'express';

const app = Express();
const PORT = 3000;

// Routes ----

app.use(Express.json());
app.use(indexRoute);
app.use(userRoute);



app.listen(PORT, () => { console.log(`Escuchando puerto ${PORT}`) });
 