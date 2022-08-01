const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hii!, My Self Sunil Kumar Sharma \nWebsite Content is Coming Soon!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})