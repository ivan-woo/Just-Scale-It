const axios = require('axios');
const db = require('./database');

const getShoes = () => (
  axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=nike')
    .then((results) => {
      results.data.results.forEach((shoe) => {
        db.create(shoe);
      });
    })
    .catch((err) => {
      console.error(err);
    })
);

module.exports.getShoes = getShoes;
