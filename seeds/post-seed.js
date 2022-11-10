const { Post } = require('../models');

const postData = [
    {
        title: "Test",
        comment: 1,
        user_id: 1,
    },
    {
        title: "Pondering",
        comment: 2,
        user_id: 1,
    },
    {
        title: "Hope",
        comment: 3,
        user_id: 2,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;