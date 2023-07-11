
const imgmodel = require('../models/imagesmodel');
const imgcont = require('../controller/imgcontroller');
const express = require('express');
const multer=require("multer")
const router = express.Router()


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });




router.post('/upload',upload.single('image'),async (req, res) => {
     
    console.log("inside upload");
    
    try {
        const image = new imgmodel();
        image.data = req.file.buffer;
        image.contentType = req.file.mimetype;
        image.title = req.body.title;
        image.desc = req.body.desc;
        image.user_id= req.body.user_id;
        await image.save();
  
        console.log('Image saved to MongoDBAtlas');
        console.log('title:',image.title);
        console.log('desc:',image.desc);
        console.log('user_id',image.user_id);

        res.status(200).json({ message: ' blog Image uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error in blog project' });
    }
});

router.get('/images', async (req, res) => {
    try {
        const images = await imgmodel.find();
        const imageData = images.map((image) => ({
            data: image.data.toString('base64'),
            contentType: image.contentType,
            title:image.title,
            desc:image.desc,
            user_id:image.user_id
        }));

        res.status(200).json(imageData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error in blog projects' });
    }
});
router.post('/test',(req, res) => {
    console.log("inside test");
})



router.post('/register',imgcont.register);
router.post('/login',imgcont.login);
module.exports = router;


