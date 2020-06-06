import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <h2>Contact List</h2>
      {contactList.map(contact => {
        return (
          <div key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.age}</p>
          </div>
        )
      })}
    </div>
  )
}