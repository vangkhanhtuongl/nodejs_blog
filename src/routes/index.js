
const newsRouter = require('./news')

function Route(app){
app.get('/',(req, res) => 
  res.render('Home'))

app.use('/news',newsRouter)

app.get('/sreach',(req,res) =>
  res.render('Sreach'))

app.post('/sreach',(req,res) =>{
  console.log(req.body)
  res.send('')
})
}

module.exports = Route