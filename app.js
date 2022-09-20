const express = require('express')
const app = express()
const port = 3000

// 插入 handlebars 及 express-handlebars
const exphbs =  require('express-handlebars')

// 路徑設定
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

// 首頁
app.get('/', (req, res) => {
  const data = {name:'首頁'}
  res.render('index', data)
})

// 介紹頁
app.get('/about', (req, res) => {
  const data = {name:'About', active: { about: true }}
  res.render('index', data)
})

// 作品頁
app.get('/portfolio', (req, res) => {
  const data = {name:'Portfolio', active: { portfolio: true }}
  res.render('index', data)
})

// 聯絡頁
app.get('/contact', (req, res) => {
  const data = {name:'Contact', active: { contact: true }}
  res.render('index', data)
})

// 監聽express
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})