import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import ContactList from 'components/ContactList/ContactList';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <AddContactForm />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
