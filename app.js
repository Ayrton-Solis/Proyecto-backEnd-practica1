 const express = require('express');
 const app = express();
 const PORT = 3000;
 const routes = require('./src/routes/user.routes')

// Routes --- 

app.use(routes)


app.listen(PORT, () => { console.log(`Escuchando puerto ${PORT}`) });
 