import { Button } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { ContactForm, LabelForm } from './AddContactFormstyled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

export const AddContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.currentTarget.value);
      return;
    }
    setPhone(evt.currentTarget.value);
  };

  return (
    <ContactForm
      onSubmit={evt => {
        evt.preventDefault();
        dispatch(addContact({ name, number: phone }));
        setName('');
        setPhone('');
      }}
    >
      <LabelForm>
        Name
        <input
          id="name"
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelForm>

      <LabelForm>
        Number
        <input
          id="phone"
          onChange={handleChange}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelForm>

      <Button type="submit" variant="outlined">
        Add contact
      </Button>
    </ContactForm>
  );
};

AddContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default AddContactForm;
