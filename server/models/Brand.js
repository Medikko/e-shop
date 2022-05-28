const Sequelize = require("sequelize")
const db = require("../config/db.config")

module.exports = db.sequelize.define(
    'brand',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },        
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)