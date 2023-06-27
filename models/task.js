import { DataTypes} from "sequelize";
import { sequelize } from "../database/database.js";
import { Proyect } from "./project.js";

export const Tasks = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    

}); 


    