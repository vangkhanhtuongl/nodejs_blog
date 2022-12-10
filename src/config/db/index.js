const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/hotel_dev')
        console.log('Connect Successfully')
    }catch(error){
        console.log('Connect Failed')
    }
}

module.exports = { connect }