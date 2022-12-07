const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require("./config/mongoose.config")
require('./routes/game.routes')(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))