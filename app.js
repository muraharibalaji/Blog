const express = require("express");
const multer = require("multer");
const imgroutes = require('./routes/imgroutes');
const blogroutes = require('./routes/blogroutes');
const bodyparser = require("body-parser");
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(bodyparser.json());
app.use(imgroutes);
app.use(blogroutes);

module.exports = app;