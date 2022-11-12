const express = require('express')
const morgan = require('morgan')
const app = express()

app.get('/',(req, res) => 
  res.send('Hello World'))

app.listen(8000,()=>console.log(`Example app listening at https://localhost:8000`))