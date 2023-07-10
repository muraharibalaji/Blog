const blogservice = require('../services/imgservice');
const bcrypt = require('bcrypt');

const register = async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await blogservice.registeruser(email,password);
        res.json(user);
    }
    catch(err){
        console.log(err);
        }
    }
    
const login = async (req,res)=>{
        try{
            const {email,password} = req.body;
            
            //finding the user
const user = await blogservice.checkuser(email);
if(!user){
     throw new Error('mail not found');
   // res.send("User not found")
}
// checking the password
const ismatch = await bcrypt.compare(password,user.password);
if(!ismatch){
    throw new Error("invalid password")
}
let tokenData ={
    id:user._id,
    email:user.email
 }
const t = await blogservice.generatetoken(tokenData,'secretkey');
res.status(200).json({
    status:true,
    token:t })


}
        catch (err){
            console.log(err)
        }


    }
       
    module.exports={register,
login
    }

