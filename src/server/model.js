const { Pool } = require('pg');

const PG_URI = 'postgres://uzjbgtkt:swjMqLUaFK7hpgmvBE1Y3wJueMjlxXes@salt.db.elephantsql.com:5432/uzjbgtkt';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => (
    pool.query(text, params, callback)),
};
