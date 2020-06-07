import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ContactCard from '../ContactCard/ContactCard';
import { ContactCardsContainerDiv } from './ContactListStyles';

export default function ContactList() {
  const [loading, setLoading] = useState(false);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    getContactList();
  }, [loading])

  const getContactList = () => {
    axios
      .get('http://localhost:4000/api/users')
      .then(response => {
        console.log(response)
        setContactList(response.data)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
      .catch(err => console.log(err))
  }

  const loader = () => {
    setLoading(true)
    console.log(loading)
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
              action={loader}
              // removeContact={removeContact} 
            />
          )
        })}
      </ContactCardsContainerDiv>

    </div>
  )
}