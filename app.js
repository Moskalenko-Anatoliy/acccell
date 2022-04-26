const express = require('express')
const app = express()
console.log('process.env.port = ' + process.env.port)
const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})