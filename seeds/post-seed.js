const { Post } = require('../models');

const postData = [
    {
        title: "Test",
        description: "this is a test",
        comment: 1,
        user_id: 1,
    },
    {
        title: "Pondering",
        description: "this is a test",
        comment: 2,
        user_id: 1,
    },
    {
        title: "Hope",
        description: "this is a test",
        comment: 3,
        user_id: 2,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;