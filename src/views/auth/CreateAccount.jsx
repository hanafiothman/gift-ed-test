import { Grid, Typography } from '@mui/material';
import CreateAccountForm from 'components/forms/CreateAccountForm';

const CreateAccount = () => {
	return (
    <Grid container>
      <Grid item xs={12} pb={2}>
        <Typography variant={'h4'} mb={1.25} textAlign={'center'}>
          Create your account
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CreateAccountForm/>
      </Grid>
    </Grid>
	);
}

export default CreateAccount;