const router = require('express').Router()
const GifRouter = require('./gifRoutes')
// const UserRouter = require('./userRouter')

router.use('/gif', GifRouter)
// router.use('/users', UserRouter)

module.exports = router;
