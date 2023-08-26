import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li id={id} className={css.contact_item}>
      <p className={css.contact}>
        {name}: <span>{number}</span>
        <button
          className={css.btn}
          type="button"
          onClick={() => dispatch(deleteContact({ id }))}
        >
          Delete
        </button>
      </p>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
