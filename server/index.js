const express = require('express')
const ctrl = require('./controller')
const app = express()
const SERVER_PORT = 4000


app.use(express.json())

app.get('/api/josh', (req, res) => {
  res.status(200).send('Josh')
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:user_id', ctrl.getUserById) //dynamic endpoint. :param is the syntax

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
