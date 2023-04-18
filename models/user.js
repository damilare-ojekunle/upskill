const {Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
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

module.exports = User;