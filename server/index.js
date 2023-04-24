const express = require('express')
const cors = require('cors')
const app = express()
const ctrl = require('./ctrl.js')
app.use(express.json())
app.use(cors())

const {getHouses,createHouse,updateHouse,deleteHouse}= ctrl
///code here

app.get('/api/houses/', getHouses);
app.post('/api/houses/',createHouse)
app.put('/api/houses/:id',updateHouse)
app.delete('/api/houses/:id',deleteHouse)







/// 
app.listen(4005, ()=> console.log('Server is running on Port 4004'))