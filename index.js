// Express 
import express from 'express';
import {sequelize} from './database/database.js'

import './models/project.js'
import './models/task.js'

const app = express();

// Definir un puerto y arrancarlo
const port = 3000;



async function main() {
    try {
    // sync() hace una sincronizacion con la base de datos, trtat de crear tablas o eliminarlas
        await sequelize.sync()
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