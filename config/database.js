const { Sequelize } = require('sequelize');

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
