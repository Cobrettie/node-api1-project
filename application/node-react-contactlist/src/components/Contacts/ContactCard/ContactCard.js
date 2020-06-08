import React, { useState } from 'react';
import axios from 'axios';

import EditContactForm from '../EditContact/EditContactForm';
import { ContainerDiv, StyledInfoP, StyledBtn } from './ContactCardStyles';

export default function ContactCard(props) {
  const [editingContact, setEditingContact] = useState(true);
  const { id, name, bio} = props.contact;
  const contact = props.contact;
  const loader = props.loader;
  console.log(props);

  const removeContact = () => {

    axios
      .delete(`http://localhost:4000/api/users/${id}`, contact)
      .then(response => {
        console.log(response)
        loader()
      })
      .catch(err => console.log(err))
  }

  const redirectUser = () => {
    props.history.push(`/editcontact/${id}`)
  }

  return (
    <ContainerDiv>
      <StyledInfoP>{name}</StyledInfoP>
      <StyledInfoP>{bio}</StyledInfoP>
      <StyledBtn onClick={removeContact}>Remove Contact</StyledBtn>
      <StyledBtn onClick={redirectUser}>Edit Contact</StyledBtn>

      { editingContact ? <EditContactForm loader={loader} contact={contact} /> : null}
    </ContainerDiv>
  )
}





{/* <Route path='/editcontact' component={EditContactForm} /> */}