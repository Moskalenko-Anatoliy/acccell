const express = require('express')
const app = express()

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, host, () => {
  console.log(`Example app listening on host ${host} port ${port}`)
})