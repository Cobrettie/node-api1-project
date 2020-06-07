import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactCard from '../ContactCard/ContactCard';
import { ContactCardsContainerDiv } from './ContactListStyles';

export default function ContactList() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/users')
      .then(response => {
        console.log(response)
        setContactList(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>

      <h2>Your Contacts</h2>

      <ContactCardsContainerDiv>
        {contactList.map(contact => {
          return <ContactCard key={contact.id} contact={contact} />
        })}
      </ContactCardsContainerDiv>

    </div>
  )
}