const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Room = new Schema({ 
    name: { type: String, default: 'Empty Room' },
    descrpition:  { type: String, match: /[a-z]/ },
    img: {type: String, maxLength: 255},
    createAt: {type: Date,default: Date.now},
    updateAt: {type: Date,default: Date.now},
})

module.exports=mongoose.model('Room', Room)
