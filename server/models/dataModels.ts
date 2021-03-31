const { Pool } = require('pg')
const env = require('dotenv').config();

const URI = process.env.PG_URI;

// console.log(URI);

 // initialize the pool
const pool = new Pool({
  connectionString: URL,
})

// export your model
module.exports = {
  query : (text: string, params: any, callback: any) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
