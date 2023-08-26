import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

// import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const App = () => {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });

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
