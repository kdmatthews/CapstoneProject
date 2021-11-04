
const express = require("express");
const cors = require("cors");
const app = express();

const creds = require("./creds");


const PORT = 3000;


app.use(express.json());
app.use(cors())

app.post("/signup", (req, res) => {
    creds.connect( async () => {
        try {
            const data = await creds.query(`INSERT INTO users(name, username, password) VALUES ('${req.body.name}', '${req.body.username}','${req.body.password}')`)
            res.send('Created new user');

        }
        catch(err){
            res.send(err);
        }
    })
});


app.listen(PORT, console.log(`I'm listening on ${PORT}`))