const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const schema = mongoose.Schema
const imageschema =new schema
({
    email:{
        type:"string",
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:"string",
        required:true
    }
})
imageschema.pre('save',async function()
{
    try{
        const user = this;
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.password,salt);
        user.password = hash; 
    }
    catch(err){
        console.log(err)
    }
})
const imagemodel = mongoose.model("imgblog",imageschema);
module.exports=imagemodel;