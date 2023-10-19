import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ element, redirectTo = '/' }) => {
  const { isUserLoggedIn } = useAuth();
  return isUserLoggedIn ? <Navigate to={redirectTo} /> : element;
};
