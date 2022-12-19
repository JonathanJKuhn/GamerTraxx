const express = require('express')
const cors = require('cors')
require('dotenv').config()
const path = require('path')

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/static', express.static(path.join(__dirname, 'client/build')));
require("./config/mongoose.config")
require('./routes/game.routes')(app)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port: ${port}`))