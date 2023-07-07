const mongoose = require("mongoose");
const s = mongoose.Schema
const is = new s
({
    data:Buffer,
    contentType:String 
});
const imgmodel = mongoose.model("bimg",is);
module.exports = imgmodel;