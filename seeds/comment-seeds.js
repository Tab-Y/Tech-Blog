const { Comment } = require('../models');

const commentData = [
    // json data
]

const seedComments = () => Post.bulkCreate(commentData);

module.exports = seedComments;