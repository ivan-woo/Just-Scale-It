const { Pool } = require('pg');

// pools will use environment variables
// for connection information
const pool = new Pool({
  user: 'ivan',
  host: '52.8.61.126',
  database: 'nikedb',
  password: 'psql123!',
  port: 5432
})

module.exports = pool;
