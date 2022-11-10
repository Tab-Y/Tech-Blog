const { User } = require('../models')

const userData = [
    {
        name: "Hidden Leaf",
        email: "hokage@gmail.com",
        password: "testpassword",
    },
    {
        name: "houseMD",
        email: "house.md@gmail.com",
        password: "testpassword",
    },
];

const seedUsers = () => Post.bulkCreate(userData);

module.exports = seedUsers;