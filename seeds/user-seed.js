const { User } = require('../models')

const userData = [
    // json data
]

const seedUsers = () => Post.bulkCreate(userData);

module.exports = seedUsers;