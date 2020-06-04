const express = require('express');

const server = express();

server.get('/', (request, response) => {
  response.json({ message: 'hello' })
})



const PORT = 4000;

server.listen(PORT, (req, res) => {
  console.log(`server listening mate, check localhost ${PORT}`, req, res)
})