const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const mongoose = require('mongoose');
const morgan = require('morgan')
const GifRouter = require('./routes/gifRoutes')
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/8gif', {useNewUrlParser: true})
.then(data => {
    console.log('success')
}).catch(err => {
    console.log('error')
})

app.use('/gif', GifRouter)

app.use(function(err,req,res,next){
    res.json({
        status: res.status || 500,
        message: err.message || 'Error'
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))