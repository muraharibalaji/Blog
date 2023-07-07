const mongoose = require("mongoose");
const s = mongoose.Schema
const is = new s
({
data:Buffer,
contentType:String,
 title:{
    type:"string",
    required:true
     },
desc:{
    type:"string",
    required:true
}
})

const imgmodel = mongoose.model("bimg",is);
module.exports = imgmodel;