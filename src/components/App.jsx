import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
// import { useEffect } from 'react';

const App = () => {
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.heading}>Phonebook</h1>

      <ContactForm />

      <h2 className={css.heading}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
