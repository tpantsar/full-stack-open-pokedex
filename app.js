const express = require('express')
const app = express()
const { version } = require('./package.json')

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  //throw 'error...'
  console.log('health check')
  res.send('ok')
})

app.get('/version', (req, res) => {
  console.log('version check')
  res.send(version) // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
