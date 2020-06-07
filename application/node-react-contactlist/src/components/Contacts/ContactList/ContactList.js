import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ContactCard from '../ContactCard/ContactCard';
import { ContactCardsContainerDiv } from './ContactListStyles';

export default function ContactList() {
  const [loading, setLoading] = useState(true);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    // getContactList();
  }, [contactList])

  const getContactList = () => {
    setLoading(true)
    axios
      .get('http://localhost:4000/api/users')
      .then(response => {
        console.log(response)
        setContactList(response.data)
        setTimeout(() => {
          setLoading(false)
        }, 500)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>

      <h2>Your Contacts</h2>

      <ContactCardsContainerDiv>
        {contactList.map(contact => {
          return (
            <ContactCard 
              key={contact.id} 
              contact={contact} 
              // removeContact={removeContact} 
            />
          )
        })}
      </ContactCardsContainerDiv>

    </div>
  )
}