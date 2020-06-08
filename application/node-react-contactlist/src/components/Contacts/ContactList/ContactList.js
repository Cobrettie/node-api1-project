import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import ContactCard from '../ContactCard/ContactCard';
import { ContactCardsContainerDiv } from './ContactListStyles';

export default function ContactList(props) {
  const [loading, setLoading] = useState(false);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    getContactList();

    // return () => contactList
  }, [loading])

  const getContactList = () => {
    axios
      .get('http://localhost:4000/api/users')
      .then(response => {
        console.log(response)
        setContactList(response.data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }

  const loader = () => {
    setLoading(true)
  }

  console.log(loading, props)

  return (
    <div>
      <h2>Your Contacts</h2>
      <ContactCardsContainerDiv>
        {contactList.map(contact => {
          return (
            <ContactCard 
              key={contact.id} 
              {...props}
              contact={contact} 
              loader={loader}
            />
          )
        })}
      </ContactCardsContainerDiv>
      {/* <Route path='/editcontact/:id' component={EditContactForm} /> */}
    </div>
  )
}