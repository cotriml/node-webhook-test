const { json } = require('express')
const express = require('express')

const app = express()
app.use(json())
const port = 3002

app.post('/webhook', (req, res) => {
  console.log(req.body)
  res.status(200).send(req.body)
})

app.listen(port, () => {
  console.log(`Server is up at ${port}`)
})