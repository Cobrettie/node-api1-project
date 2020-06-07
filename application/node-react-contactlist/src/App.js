import React, { useState } from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import ContactList from './components/Contacts/ContactList/ContactList';
import AddContactForm from './components/Contacts/AddContact/AddContactForm';
import './App.css';



function App() {
  const [loading, setLoading] = useState(false)
  
  const loader = () => {
    setLoading(true)
  }

  const unload = () => {
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }

  if (loading) {
    return <h2>Loading...</h2>
  } else {
      return (
        <div className="App">
          <NavMenu />
          <h1>React, Node Contact List</h1>
          <AddContactForm loader={loader} unload={unload} />
          <ContactList />
        </div>
      );
    }

}

export default App;
