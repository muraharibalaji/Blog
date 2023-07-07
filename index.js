const app = require('./app');
const mongoose = require("mongoose");

const dburl="mongodb+srv://balajisri1245:SB120997@cluster0.cou5got.mongodb.net/blogdb?retryWrites=true&w=majority"
mongoose.connect(dburl)
.then((result)=>{
    console.log("DB CONNECT")
})
.catch((err)=>{
    console.log(err)
})
port=2233;

app.get('/',(req,res)=>{
res.send("HII WELCOME TO TODO APP")
})
app.listen(port,()=>{
    console.log("server listen on port")
})