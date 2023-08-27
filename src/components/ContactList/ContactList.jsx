import { ContactListItem } from './ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterList = useSelector(state => state.filter.filter);

  const getFilteredContacts = () => {
    let normalizedFilter = filterList.toLowerCase();
    let filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  const visibleContacts = getFilteredContacts();

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ul>
  );
};
