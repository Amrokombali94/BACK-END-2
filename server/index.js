const express = require('express')
const cors =  require('cors')

const { getHouses, createHouse, deleteHouse, updateHouse } = require('./controller')

const app = express()



app.use(express.json())
app.use(cors())

//endpoint
app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id',deleteHouse)

let SERVER_PORT = 4004

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))