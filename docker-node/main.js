const express = require('express')
const app = express();

const PORT = process.env.PORT || 3100

app.get('/', (req, res) => {
  return res.json({ message: "Hey I am nodejs in container" })
})

app.listen(PORT, () => {
  console.log(`LIVE: http://localhost:${PORT}`)
})