require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const db2 = require('../database2/postgresIndex.js');

const PORT = 3002;

const app = express();

app.use(bodyParser.json());
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
  db2.query('SELECT * FROM products WHERE product_id > 9000000 limit 7', (err, results) => {
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
