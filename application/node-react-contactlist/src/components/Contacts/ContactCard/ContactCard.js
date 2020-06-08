import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import EditContactForm from '../EditContact/EditContactForm';
import { ContainerDiv, StyledInfoP, StyledBtn } from './ContactCardStyles';

export default function ContactCard(props) {
  const { id, name, bio} = props.contact;
  const contact = props.contact;
  const action = props.action;
  console.log(props);

  const removeContact = () => {
    axios
      .delete(`http://localhost:4000/api/users/${id}`, contact)
      .then(response => {
        console.log(response)
        action()
      })
      .catch(err => console.log(err))
  }

  const redirectUser = () => {
    props.history.push(`/editcontact`)
  }

  // const 

  return (
    <ContainerDiv>
      <StyledInfoP>{name}</StyledInfoP>
      <StyledInfoP>{bio}</StyledInfoP>
      <StyledBtn onClick={removeContact}>Remove Contact</StyledBtn>
      <StyledBtn onClick={redirectUser}>Edit Contact</StyledBtn>
      {/* <Route path='/editcontact' component={EditContactForm} /> */}
    </ContainerDiv>
  )
}