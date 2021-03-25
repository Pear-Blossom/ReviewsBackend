const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  // password: ------,
  // host: 'aws-publicIPv4-DNS',
  host: 'localhost',
  database: 'reviews-service',
  max: 20,
  port: 5432,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
