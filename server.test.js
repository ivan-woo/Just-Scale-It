/* eslint-disable */
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const data = require('./exampleData.js');

const mock = new MockAdapter(axios);

mock.onGet('http://localhost:3419/shoes').reply(200, {
  data,
});

it('makes get requests successfully', () => {
  return axios.get('http://localhost:3419/shoes')
    .then((results) => {
      expect(results.data.data.length).toBe(10);
    })
    .catch((err) => {
      done(err);
    })
});
