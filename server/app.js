if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}

const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const morgan = require('morgan')
const router = require('./routes/indexRoutes')
const gifRouter = require('./routes/gifRoutes')

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

app.use('/', router)
app.use('/gif',gifRouter)

app.use(function(err,req,res,next){
    res.json({
        status: res.status || 500,
        message: err.message || 'Error'
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))