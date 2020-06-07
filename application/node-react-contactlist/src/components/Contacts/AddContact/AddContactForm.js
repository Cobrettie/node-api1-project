import React, { useState } from 'react';
import axios from 'axios';
import { FormContainerDiv, StyledForm, StyledInput, StyledButton } from './AddContactFormStyles';

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
      <FormContainerDiv>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type='text'
            name='name'
            onChange={handleChange}
            placeholder='name'
          />
          <StyledInput 
            type='text'
            name='bio'
            onChange={handleChange}
            placeholder='bio'
          />
          <StyledButton type='submit'>Add Contact</StyledButton>
        </StyledForm>
      </FormContainerDiv>
    </div>
  )
}