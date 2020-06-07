import React, { useState } from 'react';
import axios from 'axios';

export default function AddContactForm({ loader, unload }) {
  const [credentials, setCredentials] = useState({
    name: '',
    bio: ''
  })

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name] : event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    loader();
    axios.post('http://localhost:4000/api/users', credentials)
      .then(response => {
        console.log(response, credentials, loader)
        unload();
      })
      .catch(err => console.log(err))
  }

  console.log({loader, unload})

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            onChange={handleChange}
            placeholder='name'
          />
          <input 
            type='text'
            name='bio'
            onChange={handleChange}
            placeholder='bio'
          />
          <button type='submit'>Add Contact</button>
        </form>
      </div>
    </div>
  )
}