const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

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

try {
  sequelize.sync()
  console.log("Database synchronized");
  
} catch (error) {
  console.error('Unable to synchronize the database:', error)
}
// sequelize.sync()
//   .then(() => console.log('Database synchronized'))
//   .catch((error) => console.error('Unable to synchronize the database:', error));

module.exports = User;