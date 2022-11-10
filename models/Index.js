const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

// the specific assosiations go in this file
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});



module.exports = { Comment, Post, User }