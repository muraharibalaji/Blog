const blogcont = require('../controller/blogcontroller');
const express = require('express');
const router = express.Router()
router.post('addblog',blogcont.createtask);
router.post('getblog',blogcont.viewtask);
router.post('deleteblog',blogcont.deletetask);
module.exports = router;