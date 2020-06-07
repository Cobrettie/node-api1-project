import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContainerDiv } from './ContactCardStyles';

export default function ContactCard({ contact, action }) {
  const { id, name, bio} = contact;

  const removeContact = () => {
    axios
      .delete(`http://localhost:4000/api/users/${id}`, contact)
      .then(response => {
        console.log(response)
        action()
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