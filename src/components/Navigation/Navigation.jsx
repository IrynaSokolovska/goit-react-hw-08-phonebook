import { useAuth } from 'hooks/useAuth';
import { NavigLink } from './Navigation.styled';

export const Navigation = () => {
  const { isUserLoggedIn } = useAuth();

  return (
    <nav>
      <NavigLink to="/">Home</NavigLink>
      {isUserLoggedIn && <NavigLink to="/contacts">Contacts</NavigLink>}
    </nav>
  );
};
