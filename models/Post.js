const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Post extends Model { }



// Post is the input provided by the author - NOT THE COMMENTS
// 1 user has many posts
// 1 user has many comments
// 1 post belongs to 1 user
// 1 post has many comments
// 1 comment belongs to 1 user

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            references: {
                model: 'comments',
                key: 'comment',
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts',
      }
)

module.exports = Post;