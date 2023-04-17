const {Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'upskill',
    username: 'postgres',
    password: 'holiday04',
  });
  
  sequelize
    .authenticate()
    .then(() => console.log('Connected to the database'))
    .catch((error) => console.error('Unable to connect to the database:', error));

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

sequelize.sync()
  .then(() => console.log('Database synchronized'))
  .catch((error) => console.error('Unable to synchronize the database:', error));




// const Sequelize = require('sequelize');
// const db = require('../config/database');
// const { Model, DataTypes } = require('sequelize');

// class User extends Model {}
// User.init({
//   name: DataTypes.STRING,
//   email: DataTypes.STRING,
//   age: DataTypes.NUMBER
// }, { db, modelName: 'user' });

// const User = db.define('User', {
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     email: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     age: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     },
// });



module.exports = User;