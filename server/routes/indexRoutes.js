const router = require('express').Router()
// const GifRouter = require('./gifRoutes')
const UserRouter = require('./userRoutes')

router.use('/users', UserRouter)
// router.use('/gif', GifRouter)

module.exports = router;
