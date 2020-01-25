const { Pool } = require('pg');

const PG_URI = 'postgres://rqiocamx:XOIUvjH7oFYem_GAJ-1Z8a5aSLc9XhEN@rajje.db.elephantsql.com:5432/rqiocamx';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => (
    pool.query(text, params, callback)),
};
