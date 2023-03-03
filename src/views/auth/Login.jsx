import { Grid, Typography } from '@mui/material';
import LoginForm from 'components/forms/LoginForm';

const Login = () => {
	return (
    <Grid container>
      <Grid item xs={12} pb={2}>
        <Typography variant={'h4'} mb={1.25} textAlign={'center'}>
          Login
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <LoginForm/>
      </Grid>
    </Grid>
	);
}

export default Login;