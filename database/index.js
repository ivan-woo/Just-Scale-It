const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose
  .connect('mongodb://localhost/NikeFrontPage')
  .then(() => {
    console.log('Connected to Mongoose!');
  });
const shoePictures = new Schema({
  colorway: String,
  name: String,
  retailPrice: Number,
  title: String,
  media: {
    imageUrl: String,
    smallImageUrl: String,
  },
});

const Shoes = mongoose.model('ShoePictures', shoePictures);

module.exports = Shoes;
