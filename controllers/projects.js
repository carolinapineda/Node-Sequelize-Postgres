import {Proyect} from '../models/project.js'
import { Tasks } from '../models/task.js';

export const getProjects = async(req , res) => {
    try {
        // findAll hace que de todas las filas el trata de recorrerlas y genera un arreglo
        const projects = await Proyect.findAll();
        res.json(projects)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
    
};


export const postProject = async(req , res) => {
    const {nombre, prioridad, descripcion} = req.body

    try {
        // Para crear un proyecto
        const newProject = await Proyect.create({
            nombre,
            descripcion,
            prioridad
        });
    
        res.json(newProject)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
};


export const putProject = async(req, res) => {
    try {
        const {id} = req.params;
        const {nombre, prioridad, descripcion} = req.body

        const proyecto  = await Proyect.findByPk(id);
        //para cambiar valores 
        proyecto.nombre = nombre
        proyecto.prioridad = prioridad
        proyecto.descripcion = descripcion

        //despues de actualizarlo se guarda en la base de datos
        await proyecto.save();

        res.json(proyecto);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
};


export const deleteProject = async(req, res) => {
   try {
    const {id} = req.params
    // destroy sirve para buscar y eliminar al mismo tiempo
    await Proyect.destroy({
        where: {
            id,
        }
    });
    // sendStatus se le eviara un codigo de estado
    res.sendStatus(204)
   } catch (error) {
    return res.status(500).json({
        message: error.message
        });
   };
};

export const getProjectsPorId = async(req, res) => {
    try {
        const {id} = req.params
        const proyecto = await Proyect.findOne({
            where: {
                id: id
            }
        });

        if(!proyecto) 
            return res.status(400).json({message: `no existe el proyecto con el id ${id}`})

        res.json(proyecto);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    };

};

export const getProyectTasks = async(req, res) => {
    const {id} = req.params;

    const task = await Tasks.findAll({
        where: {proyectoid: id}
    }); 

    res.json(task);
}
