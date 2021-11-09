const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
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
      console.log(name, password, userData.rows[0].password);
      const userValidated = await bcrypt.compare(
        password,
        userData.rows[0].password
      );
      console.log(userValidated);
      if (userValidated) {
        //generate web token, first argument is payload (what you want to put inthe token so you can decode it later) and second is secret key
        const token = jwt.sign({ name: name }, "SECRETKEY");
        res.json({ success: true, token: token });
        // res.redirect("http://localhost:3000/home");
      } else {
        res.json({ success: false, massage: "Not authenticated" });
        // res.send("Invalid user");
      }
      // const userData = await creds.query(
      //   `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
      // );
    } catch (error) {
      console.log(error);
    }
  };
  creds.connect(() => {
    workPlease();
    // const userData = creds.query(
    //   `SELECT * FROM users WHERE username = "${req.body.username}" && password = "${req.body.password}"`
    // );
    // console.log(userData);
  });

  // if (userValidated) {
  //   res.send("User was validated");
  //   return res.redirect("http://localhost:3000/home");
  // } else {
  //   res.send("invalid user");
  // }
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
    const decoded = jwt.verify(token, "SECRETKEY");

    if (decoded) {
      const name = decoded.name;
      const persistedUser = creds.connect(async () => {
        await creds.query(`SELECT * FROM users WHERE name = '${name}'`);
      });
      if (persistedUser) {
        const userCampaigns = creds.connect(async () => {
          await creds.query(
            `SELECT * FROM campaigns WHERE creator_name = '${name}'`
          );
          console.log(userCampaigns);
          // res.json(userCampaigns);
          // res.send(userCampaigns);
        });
      } else {
      }
    }
  }
});

app.listen(PORT, console.log(`I'm listening on ${PORT}`));
