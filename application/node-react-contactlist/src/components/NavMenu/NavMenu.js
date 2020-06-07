import React from 'react';
import { Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <div>
      <nav>
        <Link to='/'>Your Contacts</Link>
        <Link to='/addcontact'>Add Contact</Link>
      </nav>
    </div>
  )
}