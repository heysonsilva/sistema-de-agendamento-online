const dbConnection = require('./config/db')

const sequelize = await dbConnection();