const express = require('express');
const server = express();
const shortid = require('shortid');

server.use(express.json());

let users = [];
let user = {};

server.get('/', (request, response) => {
  response.json({ message: 'hello im ur server' })
})

// Create = Post
server.post('/api/users', (req, res) => {
  const userInfo = req.body;
  userInfo.id = shortid.generate();
  users.push(userInfo);
  res.status(201).json(userInfo);
})

// Read = Get
server.get('/api/users', (req, res) => {
  // return an array
  res.status(200).json(users)
})

server.get('/api/users/:id', (req, res) => {
  // return user object that matches id
})

// Delete
server.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const found = users.find(user => user.id === id);

  if (found) {
    users = users.filter(user => user.id !== id)
    res.status(200).json(found)
  } else {
    res.status(500).json({ errorMessage: "The user could not be removed" })
  }

  if (!found) {
    res.status(404).json({ message: "The user with the specified ID does not exist" })
  }
  

})

// Edit
server.put('/api/users/:id', (req, res) => {
  // edit user with same id
  // uses data from req body
  // return modified user
})







const PORT = 4000;

server.listen(PORT, (req, res) => {
  console.log(`server listening mate`)
})