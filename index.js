const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { routes } = require('./src/routes')

//настроим подключение к бд

const connection_url =
  'mongodb+srv://Dmitri:Geralt322@cluster0.1tk6p.mongodb.net/whatsapp?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
//инициализировать приложение
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello world')
})

routes.forEach((item) => {
  app.use(`/${item}`, require(`./src/routes/${item}`))
})
//объявим наши роуты
const PORT = 3000
app.listen(PORT, () => {
  console.log(`App started at ${PORT}`)
})
