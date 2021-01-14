const axios = require('axios');

it('makes get requests successfully', async () => {
  expect.assertions(1);
  const response = await axios.get('/shoes')
  return expect(response.data.length).toBe(1);
})