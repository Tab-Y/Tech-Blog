const Comment = require("./Comment.js");
const Post = require("./Post.js");
const User = require("./User.js");

// the specific assosiations go in this file
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'

});

Comment.belongsTo(User, {
    foreignKey: 'user_id'

});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});


module.exports = { Comment, Post, User }