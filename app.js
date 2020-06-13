const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors');

const dotenv = require("dotenv");
dotenv.config();

const apiRoutes = require("./routes/apiRoutes");

//MongoDB config
require("./loaders/db");
const app = express();

app.use(cors())

app.use('/', express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("dev"));

app.use("/api", apiRoutes);

app.listen(process.env.PORT || 5000);
