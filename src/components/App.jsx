import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';

// import { AddContactForm } from './AddContactForm/AddContactForm';
// import { Container } from '@mui/material';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Title } from './GlobalStyled';
// import { fetchContacts } from 'redux/operations';
// import { useEffect } from 'react';
// import { selectIsLoading, selectError } from 'redux/selectors';
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const { isUserRefresh } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isUserRefresh ? (
    <p>Refreshing...</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute element={<Register />} redirectTo="/contacts" />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute element={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute element={<Contacts />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
// --------------------------------------
// import { GlobalStyle } from 'GlobalStyle';
// import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
// // import { lazy, useEffect } from 'react';

// // import { serviceCurrentUser } from 'redux/auth/auth-operations';
// // import { RestrictedRoute } from './RestrictedRoute';
// // import { PrivateRoute } from './PrivateRoute';
// // import { useAuthUser } from 'hooks/useAuthUser';
// import { AddContactForm } from './AddContactForm/AddContactForm';
// import { Container } from '@mui/material';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Title } from './GlobalStyled';
// import { fetchContacts } from 'redux/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { selectIsLoading, selectError } from 'redux/selectors';
// import { Circles } from 'react-loader-spinner';

// export const App = () => {
//   const dispatch = useDispatch();
//   const { isUserRefresh } = useAuthUser();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Layout>
//       <Container maxWidth="xl">
//         <Title>Phonebook</Title>
//         {isLoading && !error && (
//           <Circles
//             height="80"
//             width="80"
//             color="#4fa94d"
//             ariaLabel="circles-loading"
//             wrapperStyle={{}}
//             wrapperClass=""
//             visible={true}
//           />
//         )}
//         <AddContactForm />
//         <Title>Contacts</Title>
//         <Filter />
//         <ContactList />
//       </Container>
//     </Layout>
//   );
// };
// ----------------------------------
