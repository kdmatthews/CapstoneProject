const jwt = require("jsonwebtoken");
const creds = require("../creds");

function authenticate(req, res, next) {
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
}

module.exports = authenticate;
