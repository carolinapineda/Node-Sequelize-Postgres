import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'proyectodb', 
    'postgres', 
    'postgres',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);