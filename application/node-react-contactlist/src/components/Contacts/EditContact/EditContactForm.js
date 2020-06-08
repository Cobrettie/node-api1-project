import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditContactForm(props) {
  const loader = props.loader;
  const contact = props.contact;
  const { id, name, bio } = contact;
  const [updatedContact, setUpdatedContact] = useState(
    {
      name: '',
      bio: ''
    }
  )

  const editContact = () => {
    axios
      .put(`http://localhost:4000/api/users/${id}`, updatedContact)
      .then(response => {
        console.log(response)
        loader()
      })
      .catch(err => console.log(err));
  }

  const handleChange = event => {
    setUpdatedContact({ ...updatedContact, [event.target.name] : event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    editContact();
  }

  return (
    <div>
      <h2>Edit Contact</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            name='name'
            onChange={handleChange}
            placeholder='Edit Name'
          />

          <input 
            type='text'
            name='bio'
            onChange={handleChange}
            placeholder='Edit Bio'
          />

          <button type='submit'>Submit Changes</button>
        </form>
      </div>
    </div>
  )
}
