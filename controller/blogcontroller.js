
const bs = require('../services/blogservice');
const createtask = async (req,res)=>{
    try{
        const {user_id,title,desc} = req.body;
        let blog = await bs.addblog(user_id,title,desc);
        res.json
        ({
            status:true,
            success:blog
        })
    }
    catch (err){
        console.log(err);
    }
}

const viewtask = async(req,res)=>{
    try{
        const{user_id}=req.body;
        let blog = await bs.getblog(user_id);
        res.json
        ({
            status:true,
            success:blog
        })
    }
    catch(err){
        console.log(err);
    }
}

const deletetask = async (req,res)=>{
    try{
        const {_id}=req.body;
        let blog = await bss.deleteblog(_id);
        res.json
        ({
            status:true,
            success:blog
        })
        }
        catch (err)
        {
            console.log(err)
        }
}




module.exports = {createtask,viewtask,deletetask}