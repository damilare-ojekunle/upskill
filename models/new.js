const Sequelize = require('sequelize');
const db = require('../config/database');


const news = db.define('cod', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },




});



module.exports = news;