import { Grid, Typography } from '@mui/material';
import LoginForm from 'components/forms/LoginForm';
import useAuth from 'hooks/useAuth';

const Login = () => {
  const { isLoggingIn, login } = useAuth();

	return (
    <Grid container>
      <Grid item xs={12} pb={2}>
        <Typography variant={'h4'} mb={1.25} textAlign={'center'}>
          Login
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <LoginForm
          onSubmit={(values) => login(values.email, values.password)}
          loading={isLoggingIn}
        />
      </Grid>
    </Grid>
	);
}

export default Login;