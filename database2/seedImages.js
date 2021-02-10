const faker = require('faker');
const csvWriter = require('csv-write-stream'); // produces csv files
const writer = csvWriter();
const fs = require('fs');
const axios = require('axios');

const randomizer = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const generateImages = () => {
  let imagesArray = [];
  writer.pipe(fs.createWriteStream('database2/images.csv'));
  axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=Nike')
    .then((data) => {
      // console.log(data)
      data.data.results.forEach((eachShoe) => {
        imagesArray.push(eachShoe.media.imageUrl)
      })
    })
    .then(() => {
      // console.log(imagesArray)
      for (var i = 0; i < 10; i++) {
        for (var x = 0; x < 4; x++) { // for every product is 4 images
          writer.write({
            image_url: randomizer(imagesArray),
            product_id: i + 1
          })
        }
      }
      writer.end();
    })
    .catch((err) => {
      console.log('Error getting data from shoes api')
    })
  console.log('done');
}

generateImages();