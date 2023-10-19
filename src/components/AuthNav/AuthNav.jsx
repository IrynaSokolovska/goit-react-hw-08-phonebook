import { NavigLink } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavigLink to="/register">Register</NavigLink>

      <NavigLink to="/login">Log In</NavigLink>
    </div>
  );
};
