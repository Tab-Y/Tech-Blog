const { Post } = require('../models');

const postData = [
    // json data
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;