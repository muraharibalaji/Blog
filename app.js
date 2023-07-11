const express = require("express");
const multer = require("multer");
const imgroutes = require('./routes/imgroutes');
const bodyparser = require("body-parser");
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(bodyparser.json());
app.use(imgroutes);

module.exports = app;