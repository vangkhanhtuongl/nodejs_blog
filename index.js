const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()

app.use(morgan('combined'))

app.engine('handlebars',handlebars())
app.set('engine-view','handlebars')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req, res) => 
  res.render('Home'))

app.listen(8000,()=>console.log(`Example app listening at https://localhost:8000`))
