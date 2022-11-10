const seedComments = require('./');
const seedPosts = require('./');
const seedUsers = require('./');

const sequelize = require('../config/connections');

const letTheSeedBegin = async () => {
    await sequelize.sync({force: true});        //makes the connection and forces new data in, resetting the database
    console.log('\n - - - - - Your database has been synced - - - - - \n');
    await seedComments();
    console.log('\n comments seeded \n');
    await seedPosts();
    console.log('\n posts seeded \n');
    await seedUsers();
    console.log('\n users seeded \n');
    console.log('that sounds dirty');
    process.exit(0);            // terminates the processes
};

letTheSeedBegin();