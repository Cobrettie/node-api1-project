import React, { useState } from 'react';
import axios from 'axios';
import { FormContainerDiv, StyledForm, StyledInput, StyledButton } from './AddContactFormStyles';

export default function AddContactForm(props) {
  const [postSuccess, setPostSuccess] = useState(false);
  const [credentials, setCredentials] = useState({
    name: '',
    bio: ''
  })

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name] : event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.loader();
    axios.post('http://localhost:4000/api/users', credentials)
      .then(response => {
        console.log(response, credentials, props)
        props.unload();
        setPostSuccess(true)
        setTimeout(() => {
          props.history.push('/')
        }, 500)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <FormContainerDiv>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type='text'
            name='name'
            onChange={handleChange}
            placeholder='Name'
          />
          <StyledInput 
            type='text'
            name='bio'
            onChange={handleChange}
            placeholder='Bio'
          />
          <StyledButton type='submit'>Add Contact</StyledButton>
        </StyledForm>
      </FormContainerDiv>
    </div>
  )
}