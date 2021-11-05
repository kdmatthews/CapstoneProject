
const express = require("express");
const cors = require("cors");
const app = express();
const creds = require("./creds");
const PORT = 3000;

app.use(express.json());
app.use(cors())



app.post("/signup", async (req, res) => {
   
    creds.connect(() => {
            creds.query(`INSERT INTO users(name, username, password) VALUES ('${req.body.name}', '${req.body.username}','${req.body.password}')`)
            res.send('Created new user'); 
           
       });

});

app.post("/createcampaign", async (req, res) => {
    
    creds.connect(() => {
            creds.query(`INSERT INTO campaigns(creator_name, image, title, goal, description) VALUES ('${req.body.creator_name}', '${req.body.image}','${req.body.title}', '${req.body.goal}', '${req.body.description}')`)
            res.send('Created new campaign'); 
           
       });

});

app.get("/read_campaigns", (req,res) => {
  
    creds.connect(async () => {
        data =  await creds.query(`SELECT * FROM campaigns`);
        res.send (data);    
            });
});

app.get("/read_campaigns", (req,res) => {
  
    creds.connect(async () => {
        data =  await creds.query(`SELECT * FROM campaigns WHERE creator_name = ${creator_name}`);
        res.send (data);    
            });
});


app.listen(PORT, console.log(`I'm listening on ${PORT}`))