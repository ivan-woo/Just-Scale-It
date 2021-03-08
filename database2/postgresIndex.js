const { Pool } = require('pg');

// pools will use environment variables
// for connection information
const pool = new Pool({
  user: 'Your PostgreSQL Username',
  host: 'Your IP Address or localhost',
  database: 'Your PostgreSQL database name',
  password: 'Your Password',
  port: 5432
})

module.exports = pool;
