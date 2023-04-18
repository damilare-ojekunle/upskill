const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    attachment:{
      type: DataTypes.BLOB,
      allowNull: true,
    }
})
module.exports = Post;
