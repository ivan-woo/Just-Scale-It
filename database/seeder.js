const seedData = require('../exampleData.js');
const db = require('.');

const seederFunction = () => {
  seedData.forEach((data) => {
    db.create(data);
  });
};

seederFunction();
