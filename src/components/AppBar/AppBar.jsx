import { Header } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isUserLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isUserLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
