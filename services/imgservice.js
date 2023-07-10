
const imagesblogs = require('../models/imagesblogs');
const jwt = require('jsonwebtoken');
class blogservice{
    static async registeruser(email,password){
try{
    const createuser=await imagesblogs.create({email,password});
    return createuser
}
   catch(err){
    console.log(err)
}
}

static async checkuser(email){
    try{
        
        return await imagesblogs.findOne({email});
    }
    catch(err){
        console.log(err);
    }
}
static async generatetoken(tokendata,secretkey){
    try{
        return jwt.sign(tokendata,secretkey,{expiresIn:'1w'});

    }
    catch (err){
        console.log(err);
    }
}


 
}
module.exports=blogservice