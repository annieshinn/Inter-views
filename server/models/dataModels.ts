const { Pool } = require('pg')
const env = require('dotenv').config();

const connectionString = process.env.PG_URI;

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
