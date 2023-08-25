import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li id={id} className={css.contact_item}>
      <p className={css.contact}>
        {name}: <span>{number}</span>
        <button
          className={css.btn}
          type="button"
          onClick={() => deleteContact(id)}
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
  deleteContact: PropTypes.func.isRequired,
};
