import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContainerDiv } from './ContactCardStyles';

export default function ContactCard({ contact }) {
  const [loading, setLoading] = useState(true)
  const { id, name, bio} = contact;

  // useEffect(() => {

  // }, loading)

  const removeContact = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:4000/api/users/${id}`, contact)
      .then(response => {
        console.log(response)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
      .catch(err => console.log(err))
  }

  return (
    <ContainerDiv>
      <p>{id}</p>
      <p>{name}</p>
      <p>{bio}</p>
      <button onClick={removeContact}>Remove Contact</button>
    </ContainerDiv>
  )
}