const express = require('express')
const router = express.Router()
const gifController = require('../controller/controller')
const gif = require('../helper/images')

router.post('/', gif.multer.single('gif'), 
gif.sendUploadToGCS,gifController.uploadFile)
router.get('/', gifController.getGif)

module.exports= router;