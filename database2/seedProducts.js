const faker = require('faker');
const csvWriter = require('csv-write-stream'); // produces csv files
const writer = csvWriter();
const fs = require('fs');

const generateProductData = () => {
  writer.pipe(fs.createWriteStream('productData.csv'));
  for (var i = 0; i < 10; i++) {
    writer.write({
      name: faker.commerce.productName(),
      details: faker.commerce.productDescription(),
      colorway: faker.commerce.color(),
      style: faker.commerce.productMaterial(),
      moreBenefits: faker.commerce.productDescription(),
      price: faker.commerce.price()
    })
  }
  writer.end();
  console.log('done');
}

generateProductData();