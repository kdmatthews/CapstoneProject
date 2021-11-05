require('dotenv').config()
const token = process.env.REACT_APP_elephant
const pg = require('pg');
const creds = new pg.Client(token);
module.exports = creds;


// console.log(token)


