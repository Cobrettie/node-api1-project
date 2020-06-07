import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import ContactList from './components/Contacts/ContactList/ContactList';
import AddContactForm from './components/Contacts/AddContact/AddContactForm';
import './App.css';

function App() {
  const [appLoading, setAppLoading] = useState(false)

  const loader = () => {
    setAppLoading(true)
  }

  const unload = () => {
    setAppLoading(false)
  }

  return (
    <div className="App">
      <NavMenu />
      <Route 
        exact path='/'
        render={ props => <ContactList {...props} loader={loader} unload={unload} /> }
      />

      <Route
        exact path='/addcontact' 
        render={ props => <AddContactForm {...props} loader={loader} unload={unload} /> } 
      />
    </div>
  );
}



export default App;
