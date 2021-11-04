require('dotenv').config()
const token = process.env.elephant
const pg = require('pg');
const creds = new pg.Client(token);
module.exports = creds;



//or native libpq bindings
//var pg = require('pg').native

// var conString = "INSERT_YOUR_POSTGRES_URL_HERE" //Can be found in the Details page

creds.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  creds.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    creds.end();
  });
});