const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gifSchema = new Schema({
    
    gif: {
        type: String
    },
    UserId: {
        type: Schema.Types.ObjectId, ref: 'User' 
    }
}, {
    timestamps: true,
    versionKey: false
})

const gif = mongoose.model('gif', gifSchema)
module.exports = gif;