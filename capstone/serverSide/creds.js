require('dotenv').config()
const token = "postgres://wfbkcthr:NprjKixAO6W24kORo8euf6WtV_k3Q3LD@fanny.db.elephantsql.com/wfbkcthr"
const pg = require('pg');
const creds = new pg.Client(token);
module.exports = creds;


console.log(token)
//or native libpq bindings
//var pg = require('pg').native

// var conString = "INSERT_YOUR_POSTGRES_URL_HERE" //Can be found in the Details page

