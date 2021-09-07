const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const router = require('./router')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

app.use('/api', router)

app.listen(port, () => console.log(`Example app listening on port port!`))