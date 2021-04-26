const { Pool } = require('pg')
const env = require('dotenv').config();

const connectionString = `postgres://sksouxch:y9gd3sepUfX9pl4WH8qbNbj47bjieenm@queenie.db.elephantsql.com:5432/sksouxch`;

// initialize the pool
const pool = new Pool({
  connectionString,
})

// export your model
module.exports = {
  query : (text: string, params: any, callback: any) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
