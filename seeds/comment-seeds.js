const { Comment } = require('../models');

const commentData = [
    {
        comment: "this is a test comment",
        user_id: 1,
        post_id: 1,
    },
    {
        comment: "i wonder how this will work",
        user_id: 2,
        post_id: 2,
    },
    {
        comment: "should be interesting",
        user_id: 3,
        post_id: 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;