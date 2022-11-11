const { Post } = require('../models');

const postData = [
    {
        title: "Test",
        description: "this is a test",
        user_id: 1,
    },
    {
        title: "Pondering",
        description: "this is a test",
        user_id: 2,
    },
    {
        title: "Hope",
        description: "this is a test",
        user_id: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;