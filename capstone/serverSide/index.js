const express = require("express");
const cors = require("cors");
const app = express();
const creds = require("./creds");
const PORT = 3000;
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  creds.connect(() => {
    console.log(name, username, password);
    const data = creds.query(
      `INSERT INTO users(name, username, password) VALUES ('${name}', '${username}','${hashedPassword}')`
    );
    console.log(data);
    res.status(200).send("Updated users table");
  });
});

app.post("/login", async (req, res) => {
  const userData = await creds.query(
    `SELECT * FROM users WHERE username = ${req.body.username} && password = ${req.body.password}`
  );
  console.log(userData);
  //  const userPassword = userData.
});

app.post("/createcampaign", async (req, res) => {
  creds.connect(() => {
    creds.query(
      `INSERT INTO campaigns(creator_name, image, title, goal, description) VALUES ('${req.body.creator_name}', '${req.body.image}','${req.body.title}', '${req.body.goal}', '${req.body.description}')`
    );
    res.send("Created new campaign");
  });
});

app.get("/read_campaigns", (req, res) => {
  creds.connect(async () => {
    data = await creds.query(
      `SELECT * FROM campaigns`
    );
    res.send(data);
  });
});


app.get("/read_campaigns_by_user", (req,res) => {
  
    creds.connect(async () => {
        data =  await creds.query(`SELECT * FROM campaigns WHERE creator_name = ${creator_name}`);
        res.send (data);    
            });
});

app.listen(PORT, console.log(`I'm listening on ${PORT}`));
