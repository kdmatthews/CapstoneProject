require("dotenv").config();
const token = process.env.REACT_APP_elephant;
const pg = require("pg");
const creds = new pg.Client(
  "postgres://wfbkcthr:NprjKixAO6W24kORo8euf6WtV_k3Q3LD@fanny.db.elephantsql.com/wfbkcthr"
);

module.exports = creds;

// console.log(token)
