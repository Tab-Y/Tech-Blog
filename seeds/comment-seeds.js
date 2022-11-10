const { Comment } = require('../models');

const commentData = [
    {
        comment: "this is a test comment",
    },
    {
        comment: "i wonder how this will work",
    },
    {
        comment: "should be interesting",
    },
];

const seedComments = () => Post.bulkCreate(commentData);

module.exports = seedComments;