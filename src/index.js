const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine }=require('express-handlebars')
const { extname } = require('path')
const app = express()
//HTTP Logger
app.use(morgan('combined'))
//Template Engine
app.engine('hbs',engine({
    extname: '.hbs'
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resource/views'))

app.get('/',(req, res) => 
  res.render('Home'))

app.get('/news',(req, res) => 
  res.render('News'))

app.listen(8000,()=>console.log(`Example app listening at https://localhost:8000`))