import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const isUserRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return { isUserLoggedIn, isUserRefreshing, user };
};
