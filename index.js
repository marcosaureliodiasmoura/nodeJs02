const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

nunjucks.configure('views', {
  // Para poder manipular o nome dos arquivos, fazendo automaticamente o autoescape.
  autoescape: true,
  // Recebe a variável do nosso servidor que é app
  express: app,
  // Altera automaticamente sem que precise restartar o servidor.
  watch: true
})

// Setamos globalmente a viewengine que é o nunjucks e a sua extensão njk
app.set('view engine', 'njk')

app.get('/', (req, res) => {
  return res.render(`list`, { name: 'Marquinhos_x' })
})

const users = ['Marcos Moura', 'Daniel Radcliffe', 'Hermione Granger']

app.get('/usuarios/', (req, res) => {
  return res.render(`list02`, { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.use(express.urlencoded({ extended: false }))

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/usuarios')
})

app.listen(3000)
