import {Proyect} from '../models/project.js'

export const getProjects = async(req , res) => {
    try {
        // findAll hace que de todas las filas el trata de recorrerlas y genera un arreglo
        const projects = await Proyect.findAll();
        res.json(projects)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
    
}


export const postProject = async(req , res) => {
    const {nombre, prioridad, descripcion} = req.body

    try {
        const newProject = await Proyect.create({
            nombre,
            descripcion,
            prioridad
        })
    
        res.json(newProject)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


export const putProject = async(req, res) => {
    const {id} = req.params;
    const {nombre, prioridad} = req.body
}


export const deleteProject = async(req, res) => {
   try {
    const {id} = req.params
    // destroy sirve para buscar y eliminar al mismo tiempo
    await Proyect.destroy({
        where: {
            id,
        }
    })
    // sendStatus se le eviara un codigo de estado
    res.sendStatus(204)
   } catch (error) {
    return res.status(500).json({
        message: error.message
    })
   }
}
