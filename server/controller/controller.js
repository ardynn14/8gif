const Gif = require('../model/model')
class gifController {
    static uploadFile(req,res,next){
        let {cloudStoragePublicUrl} = req.file
        Gif.create({
            gif: cloudStoragePublicUrl
        }).then(data => {
            res.status(201).json({
                data
            })
        }).catch(err => {
            res.status(406)
            next(err)
        })
    }
    static getGif(req,res,next){
        Gif.find()
        .then(data => {
            res.status(200).json({
                data
            })
        }).catch(err => {
            res.status(404)
            next(err)
        })
    }
}

module.exports = gifController;