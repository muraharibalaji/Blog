const mongoose = require("mongoose");
const s = mongoose.Schema
const imgschema = new s
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
},

   
})

const imgmodel = mongoose.model("bimg",imgschema);
module.exports = imgmodel;