const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine }=require('express-handlebars')
const app = express()

app.use(morgan('combined'))

app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req, res) => 
  res.render('Home'))

app.listen(8000,()=>console.log(`Example app listening at https://localhost:8000`))