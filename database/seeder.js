const helper = require('../apiHelper.js');

const seederFunction = () => {
  helper.getShoes()
    .then(() => {
      console.log('SEEDED');
    })
    .catch((err) => {
      console.error(err);
    });
};

seederFunction();
