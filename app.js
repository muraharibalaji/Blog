const express = require("express");
const imgroutes = require('./routes/imgroutes');
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());
app.use(imgroutes);

module.exports = app;