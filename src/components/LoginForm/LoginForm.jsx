import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { LogFormForm, LogFormLabel } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LogFormForm onSubmit={handleSubmit} autoComplete="off">
      <LogFormLabel>
        Email
        <input type="email" name="email" />
      </LogFormLabel>
      <LogFormLabel>
        Password
        <input type="password" name="password" />
      </LogFormLabel>
      <button type="submit">Log In</button>
    </LogFormForm>
  );
};
