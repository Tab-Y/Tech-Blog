const { User } = require('../models')

const userData = [
    {
        username: "Hidden Leaf",
        email: "hokage@gmail.com",
        password: "testpassword",
    },
    {
        username: "houseMD",
        email: "house.md@gmail.com",
        password: "testpassword",
    },
    {
        username: 'annoyed',
        email: 'very@mail.com',
        password: 'doesntwork',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;