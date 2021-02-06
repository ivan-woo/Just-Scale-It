const { commerce } = require('faker');
const csvWriter = require('csv-write-stream'); // produces csv files
const writer = csvWriter();
const fs = require('fs');
const axios = require('axios');

const randomizer = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const randomStock = () => {
  return Math.floor(Math.random() * 20);
}

const generateProductData = () => {
  let images = [];
  let colors = [];
  let names = [];
  let prices = [];
  let styles = [];
  writer.pipe(fs.createWriteStream('database2/productData.csv'));
  axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=Nike')
    .then((response) => {
      response.data.results.forEach((eachShoe) => {
        images.push(eachShoe.media.imageUrl);
        colors.push(eachShoe.colorway);
        names.push(eachShoe.shoe);
        prices.push(eachShoe.retailPrice);
        styles.push(eachShoe.styleId);
      })
    })
    .then(() => {
      for (var i = 0; i < 5000000; i++) {
        writer.write({
          product_name: randomizer(names),
          details: commerce.productDescription(),
          colorway: randomizer(colors),
          price: randomizer(prices),
          sizes: `{${8}, ${8.5}, ${9}, ${9.5}, ${10}, ${10.5}, ${11}, ${11.5}, ${12}, ${12.5}, ${13}}`,
          stock: `{${randomStock()}, ${randomStock()}, ${randomStock()}, ${randomStock()}, ${randomStock()}, ${randomStock()}, ${randomStock()}, ${randomStock()}, ${randomStock()}, ${randomStock()}, ${randomStock()}}`,
          media: `{${randomizer(images)}, ${randomizer(images)}, ${randomizer(images)}, ${randomizer(images)}}`,
          style: randomizer(styles),
          moreBenefits: commerce.productDescription()
        })
      }
      writer.end();
      console.log('done');
    })
    .catch((err) => {
      console.log('error generating product data')
    })
}

generateProductData();

// sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
//           stock: [randomStock(), randomStock(), randomStock(), randomStock(), randomStock(), randomStock(), randomStock(), randomStock(), randomStock(), randomStock(), randomStock()],
//           media: [randomizer(images), randomizer(images), randomizer(images), randomizer(images)],