import { Sequelize } from "sequelize";

const db = new Sequelize('Perrera','root','',{
    host: 'localhost',
    dialect: 'mysql'

})


export default db