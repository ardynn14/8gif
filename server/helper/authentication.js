const { verifyToken } = require('../helper/jwt');
const Gif = require('../model/model');

module.exports = {
    Authentication: (req, res, next) => {
        if (req.headers.token) {
            try {
                let decode = verifyToken(req.headers.token)
                req.decode = decode
                next()
            }
            catch{
                throw new Error({ status: 401, message: "invalid token", err: err })
            }
        }
        else {
            throw new Error({ status: 401, message: "please login first" })
        }
    }
    ,
    Authorization: (req, res, next) => {
        const _id = req.params.articleId;
        const user = req.decode;

        Gif.findById({
            _id
        })
            .then(function (gif) {
                if(gif.UserId === user._id){
                    next()
                } else {
                    next({status: 401, message:"Unauthorized action!"})
                }
            })
            .catch(next)
    }
}