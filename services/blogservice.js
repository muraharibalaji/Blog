const  blogmodel = require('../models/imagesmodel');
class blogservice{
    static async addblog(user_id,title,desc){
        try{

            const createblog = await blogmodel.create({user_id,title,desc});
            return createblog;
        }
        catch(err){
            console.log(err);
        }
        }

        static async getblog (user_id){
        try{
            const getdata = await blogmodel.find({user_id});
            return getdata;
        }
        catch(err){
            console.log(err);
        }

        }

        static async deleteblog(id){
        try{
            const deleted = await blogmodel.findOneAndDelete({_id:id});
            return deleted;
        }
        catch(err)
        {
            console.log(err);
        }
    }
       
    

   

}



module.exports= blogservice;