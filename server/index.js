require('newrelic');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db2 = require('../database2/postgresIndex.js');

const PORT = 3002;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/shoes', (req, res) => {
  let randomNumber = Math.floor(Math.random() * Math.floor(10000000));
  db2.query(`SELECT * FROM products WHERE product_id > ${randomNumber} limit 10`, (err, results) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(results.rows)
    }
  })
});

app.get('/loaderio-684fa0e8bcd71cfa3709c7876f62eadf/', (req, res) => {
  res.status(200).send('loaderio-684fa0e8bcd71cfa3709c7876f62eadf')
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
