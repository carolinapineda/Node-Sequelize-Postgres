// Express 
import express from 'express';
import {sequelize} from './database/database.js';

// Importamos las rutas a utilizar 
import projectRoutes from './routes/projects.routes.js'
import taskRoutes from './routes/tasks.routes.js';

// import './models/project.js'
// import './models/task.js'

const app = express();

// middlewares
/* Cada vez que se envie un formato json va a poder interpretarlo y lo va a guardar dentro de un req.body.
Cundo mandamos a llamar el req.body vamos a poder a utilizar los datos que la plicacion cliente me esta enviando*/
app.use(express.json())

// Definir un puerto y arrancarlo
const port = 3000;

// Las utilizamos
app.use(projectRoutes);
app.use(taskRoutes);



async function main() {
    try {
    // sync() hace una sincronizacion con la base de datos, trtat de crear tablas o eliminarlas
        await sequelize.sync({force: true})
    // authenticate nos sirve para comprobar la conexion a la base de datos
        await sequelize.authenticate();
        console.log('La conexión a la base de datos se ha establecido con éxito');
        app.listen(port, ()=>{
        console.log('El servidor esta corriendo en el puero', port);
    });
    } catch (error) {
        console.error('No se puede conectar a la base de datos:', error);
        
    }
}

main();