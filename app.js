const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors');
const serverless = require('serverless-http');

const dotenv = require("dotenv");
dotenv.config();

const apiRoutes = require("./routes/apiRoutes");

//MongoDB config
require("./loaders/db");
const app = express();

app.use(cors())

app.use(express.static(path.join(__dirname, 'frontend/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("dev"));

app.use('/.netlify/functions/server', apiRoutes);


module.exports = app;
module.exports.handler = serverless(app);
