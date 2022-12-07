const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine }=require('express-handlebars')
const { extname } = require('path')
const { query } = require('express')
const app = express()

const Route =require('./routes')

app.use(express.static(path.join(__dirname,'public')))
//HTTP Logger

app.use(express.urlencoded())
app.use(express.json())

app.use(morgan('combined'))
//Template Engine
app.engine('hbs',engine({
    extname: '.hbs'
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resource/views'))

//Routes init
Route(app)

app.listen(4200,()=>console.log(`Example app listening at https://localhost:4200`))