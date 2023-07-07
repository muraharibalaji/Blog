
const imgmodel = require('../models/imagesmodel');
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
        await image.save();
  
        console.log('Image saved to MongoDB');

        res.status(200).json({ message: 'Image uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/test',(req, res) => {
    console.log("inside test");
})




module.exports = router;