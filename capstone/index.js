const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const creds = require("./creds");
const PORT = process.env.PORT || 3000;
const path = require('path');
const bcrypt = require("bcrypt");
const authenticate = require("./middleware/authMiddleware");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.post("/user", authenticate, (req, res) => {});

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  creds.connect(() => {
    const data = creds.query(
      `INSERT INTO users(name, username, password) VALUES ('${name}', '${username}','${hashedPassword}')`
    );
    res.status(200).send("Updated users table");
  });
});

app.post("/login", (req, res) => {
  const { username, password, name } = req.body;

  const workPlease = async () => {
    try {
      // you need to add a input field for the name
      const userData = await creds.query(
        `SELECT * FROM users WHERE name = '${name}'`
      );
      const userValidated = await bcrypt.compare(
        password,
        userData.rows[0].password
      );
      
      if (userValidated) {
        //generate web token, first argument is payload (what you want to put inthe token so you can decode it later) and second is secret key
        const token = jwt.sign({ name: name }, "SECRETKEY");
        res.json({ success: true, token: token });
        // res.redirect("http://localhost:3000/user");
      } else {
        res.json({ success: false, massage: "Not authenticated" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  creds.connect(() => {
    workPlease();
  });
});

app.post("/create_campaign", async (req, res) => {
  creds.connect(() => {
    creds.query(
      `INSERT INTO campaigns(creator_name, image, title, goal, description) VALUES ('${req.body.creator_name}', '${req.body.image}','${req.body.title}', '${req.body.goal}', '${req.body.description}')`
    );
    res.send("Created new campaign");
  });
});

app.get("/read_campaigns", (req, res) => {
  creds.connect(async () => {
    const data = await creds.query(`SELECT * FROM campaigns`);
    res.send(data);
  });
});

app.get("/read_campaigns_by_user/:creator_name", (req, res) => {
  const creator_name = req.params.creator_name;
  const authHeader = req.headers["authorization"];

  if (authHeader) {
    let token = authHeader.split(" ")[1]; // creates an array with two elements
    // verify the token

    try {
      const decoded = jwt.verify(token, "SECRETKEY");
      if (decoded) {
        const name = decoded.name;
        creds.connect(async () => {
          const userCampaigns = await creds.query(
            `SELECT * FROM campaigns WHERE creator_name = '${name}'`
          );
          res.json(userCampaigns);
        });
      } else {
        //user does not exist
        res.json({ success: false, message: "User does not exist!" });
      }
    } catch (error) {
      res
        .status(401)
        .json({ success: false, message: "Token has been tampered with!" });
    }
  } else {
    // no authentication headers
    res
      .status(401)
      .json({ success: false, message: "No authentication headers found!" });
  }
});

app.post("/update_campaign/:id", (req, res) => {
  const id = req.params.id;
  creds.connect(async () => {
    const data = await creds.query(
      `UPDATE campaigns SET image = '${req.body.image}', title = '${req.body.title}', goal = ${req.body.goal}, description = '${req.body.description}' WHERE campaign_id = ${id}`
    );
    res.send(data);
  });
});

app.delete("/delete_campaign/:id", (req, res) => {
  const id = req.params.id;
  creds.connect(async () => {
    const data = await creds.query(
      `DELETE FROM campaigns WHERE campaign_id = ${id}`
    );
    res.send(data);
  });
});
// donations route
app.post("/update_donations/:id", (req, res) => {
  const id = req.params.id;

  
  creds.connect(async () => {
    const data = await creds.query(
      `UPDATE campaigns SET donations = (donations + ${req.body.donations}) WHERE campaign_id = ${id}`
    ); 
    
    res.send(data);
  });
});

app.listen(PORT, console.log(`I'm listening on ${PORT}`));
