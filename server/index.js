const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db2 = require('../database2/postgresIndex.js');
// const db = require('../database');

const PORT = 3002;

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/api/shoes', (req, res) => {
//   db.find()
//     .then((results) => {
//       res.status(200).json(results);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

app.get('/api/shoes', (req, res) => {
  db2.query('SELECT * FROM products limit 10', (err, results) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(results.rows)
    }
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
