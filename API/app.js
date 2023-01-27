const compression = require('compression')
const { join } = require('path')

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const router = require('./routes')
const app = express()

app.use(
  cors({
    origin: ['http://localhost:3000', '*'],
    credentials: true
  })
)
app.set('port', process.env.PORT || 4000)

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(compression())

app.use('/api/v1/', router)

module.exports = app
