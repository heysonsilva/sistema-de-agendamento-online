require ('dotenv').config()
const { Sequelize } = require('sequelize')

async function dbConnection() {    

    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    });

    try {
        await sequelize.authenticate();
        console.log("MySql Conectado :D")
    } catch (error) {
        console.log('Tem Alguma Parada Errada Ae Mano, ${error}')
    }
}

module.exports = dbConnection;