
const express = require("express");
const cors = require("cors");
const app = express();
const creds = require("./creds");
const PORT = 3000;

app.use(express.json());
app.use(cors())



app.post("/signup", async (req, res) => {
    console.log(creds)
    creds.connect(() => {
            creds.query(`INSERT INTO users(name, username, password) VALUES ('${req.body.name}', '${req.body.username}','${req.body.password}')`)
            res.send('Created new user'); 
           
       });

});


app.listen(PORT, console.log(`I'm listening on ${PORT}`))