import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItems = ({ contact }) => {
  const dispatch = useDispatch();

  // const handleDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
export default ContactListItems;
