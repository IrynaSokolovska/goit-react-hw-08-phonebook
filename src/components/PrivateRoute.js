import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element, redirectTo = '/' }) => {
  const { isUserLoggedIn } = useAuth();
  const { isUserRefresh } = useAuth();

  const shouldRedirectUser = !isUserRefresh && !isUserLoggedIn;

  return shouldRedirectUser ? <Navigate to={redirectTo} /> : element;
};
