const express = require('express');
const server = express();
const shortid = require('shortid');

server.use(express.json());

let users = [];

server.get('/', (request, response) => {
  response.json({ message: 'hello im ur server' })
})

// Create = Post
server.post('/api/users', (req, res) => {
  const userInfo = req.body;
  userInfo.id = shortid.generate();

  if (!userInfo.name || !userInfo.bio) {
    res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
  }

  if (userInfo) {
    users.push(userInfo)
    res.status(201).json(userInfo)
  }
})

// Read = Get
server.get('/api/users', (req, res) => {
  const allUsers = req.body;

  if (!allUsers) {
    res.status(500).json({ errorMessage: "The users information could not be retrieved." })
  } 

  res.status(200).json(users)
})

server.get('/api/users/:id', (req, res) => {
  // return user object that matches id
  const { id } = req.params;
  const user = req.body;
  const found = users.find(user => user.id === id);

  if (!found) {
    res.status(404).json({ message: "The user with the specified ID does not exist." })
  }

  if (!user) {
    res.status(500).json({ errorMessage: "The user information could not be retrieved." })
  }
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

// POST 
server.post('/api/users', (req, res) => {
  const { name, bio } = req.body;

  if (!name || !bio) {
    res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
  }
})







const PORT = 4000;

server.listen(PORT, (req, res) => {
  console.log(`server listening mate`)
})