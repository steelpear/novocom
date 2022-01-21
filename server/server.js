/* eslint-disable no-console */
const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.set('port', 3001)

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/feed', require('./routes/feed'))
app.use('/', express.static(path.join(__dirname, '../dist')))
