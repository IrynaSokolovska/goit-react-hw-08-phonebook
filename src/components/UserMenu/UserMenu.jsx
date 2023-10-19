import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { UserMenuWrapper, UserNameP } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <UserMenuWrapper>
      <UserNameP>Welcome, {user.name}</UserNameP>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </UserMenuWrapper>
  );
};
