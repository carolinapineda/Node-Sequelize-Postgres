import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { Tasks } from './task.js';

export const Proyect = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    prioridad: {
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

// El hasmany es para poder relacionar esta tabla con otras tablas.
// en este caso seria el proyecto tiene muchas tareas
Proyect.hasMany(Tasks, {
    foreignKey: 'proyectoid',
    // El sourceKey siginifica que de dnde va a estar enlazado 
    sourceKey: 'id'
})

Tasks.belongsTo(Proyect, {
    foreignKey: 'proyectoid',
    targetId: 'id'
})
   


