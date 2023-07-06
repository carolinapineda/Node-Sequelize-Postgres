import {Tasks} from '../models/task.js';

export const getTasks = async(req, res) => {
    try {
        const tasks = await Tasks.findAll()
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
};

export const postTask = async(req, res) => {
    try {
        // Se le pasa tambien el proyectoid para poder agregarle ese parametro a nuestra tarea y haga la funcion de relacion con el proyecto.
        const {nombre, done, proyectoid} = req.body;

        const newTask = await Tasks.create({
            nombre,
            done,
            proyectoid
        });

        res.json(newTask);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
};

export const putTask = async(req, res) => {
    try {
        const {id} = req.params;
        const task = await Tasks.findOne({
            where: {id}  
        });
        /* El task.set significa que de la tarea voy a establecer algo nuevo, esto se puede ocupar en vez de esto:
        const {nombre, done, proyectoid} = req.body;*/

        /*Set lo que hace es si nada mas se le pasa un atributo a actualizar(Solamente se actualiza el atributo que se le paso al postman en el body) 
        o el nombre del atributo se pasa mal(No se actualiza ese atributo por que no lo encontro dentro del modelo) este no dara un error.
        No es necesario ponerle todos los atributos para actualizar la tarea*/
        task.set(req.body);
        // Guardamos la tarea 
        await task.save();
        // retornamos la tarea
        return res.json(task);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };

};

export const deleteTask = async(req, res) => {
    const {id} = req.params;

    try {
       const task = await Tasks.destroy({
            where: {id}
        });

        res.json(task); 

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
};

export const getTaskPorId = async(req, res) => {
    const {id} = req.params;

    try {
        const task = await Tasks.findOne({
            where: {id}
        }); 

        res.json(task);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
};