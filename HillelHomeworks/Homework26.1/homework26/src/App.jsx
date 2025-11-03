import { useState, useEffect } from 'react'
import './App.css'
import AddPage from './components/AddPage'
import ContactPage from './components/ContactPage'

function App() {
  const [isPage, setPage] = useState('contacts');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
        const loadData = async ()=> {
          const response = await fetch('/contacts.json');
          const result = await response.json();
          setContacts(result);
          localStorage.setItem('contacts', JSON.stringify(result))
        } 

        const localContacts = localStorage.getItem('contacts');
        localContacts ? setContacts(JSON.parse(localContacts)) : loadData(); 

  }, [])

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]))
  }

  const deleteContact = (id) => {
    const deletedContacts = contacts.filter(contact => contact.id !== id );
    setContacts(deletedContacts);
    localStorage.setItem('contacts', JSON.stringify(deletedContacts));
  }

  const handlePage = (page) => {
    setPage(page);
  }

  const currentPage = isPage === 'contacts' ?  <ContactPage contacts={contacts} deleteContact={deleteContact}/> : <AddPage contacts={contacts} addContact={addContact} handlePage={handlePage}/>; 

  return (
    <>
    <div className="app-controls">
      <button className={isPage === 'contacts' ? 'control-btn active' : 'control-btn'} type="button" onClick={()=> handlePage('contacts')}>Contacts</button>
      <button className={isPage === 'add' ? 'control-btn active' : 'control-btn'} type="button" onClick={()=> handlePage('add')}>Add contact</button>
    </div>
    {currentPage}
    </>
  )
}

export default App
