const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Comment = require("../models/comment")
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
});
//Define association between post and comment 
Post.hasMany(Comment);
Comment.belongsTo(Post);
module.exports = Post;
