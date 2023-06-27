import express from 'express';

const app = express();

// Definir un puerto ny arrancarlo
const port = 3000;

app.listen(port, ()=>{
    console.log('El servidor esta corriendo en el puero', port);
});