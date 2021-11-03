const express = require("express");
const cors = require("cors");
const app = express();

const creds = require("./creds");


const PORT = 3002;


app.use(express.json());
app.use(cors())

