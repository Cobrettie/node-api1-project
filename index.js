const express = require('express');
const server = express();

server.use(express.json());

let users = [];
let user = {};

server.get('/', (request, response) => {
  response.json({ message: 'hello im ur server' })
})

server.post('/api/users', (req, res) => {
  const userInfo = req.body;
  users.push(userInfo);

  res.status(201).json(hubInfo);
})

server.get('/api/users', (req, res) => {
  // return an array
  // res.status().json()
})

server.get('/api/users/:id', (req, res) => {
  // return user object that matches id
})

server.delete('/api/users/:id', (req, res) => {
  // remove user with specified id
  // returns deleted user
})

server.put('/api/users/:id', (req, res) => {
  // edit user with same id
  // uses data from req body
  // return modified user
})







const PORT = 4000;

server.listen(PORT, (req, res) => {
  console.log(`server listening mate, check localhost ${PORT}`, req, res)
})