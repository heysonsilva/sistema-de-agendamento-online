import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

try {
    await sequelize.authenticate();
    console.log('MySql Conectado :D');
} catch (error) {
    console.error('Tem Alguma Parada Errada Ae Mano, ${error}');
}
