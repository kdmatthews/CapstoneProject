
const express = require("express");
const cors = require("cors");
const app = express();
const creds = require("./creds");
const PORT = 3000;
// var Parser = require("body-parser")

// app.use(bodyParser.json())
app.use(express.json());
app.use(cors())



app.post("/signup", async (req, res) => {
    console.log(creds)
    creds.connect(() => {
    //    try{
            creds.query(`INSERT INTO users(name, username, password) VALUES ('${req.body.name}', '${req.body.username}','${req.body.password}')`)
            res.send('Created new user'); 
           
            // console.log(data)
       });
    //    catch(err) {
    //        console.log(err)
    //    }
    // })
});


app.listen(PORT, console.log(`I'm listening on ${PORT}`))