import { Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';
import GftFormControl from 'components/reusable/GftFormControl';
import GftTextField from 'components/reusable/GftTextField';
import GftPasswordField from 'components/reusable/GftPasswordField';
import GftButton from 'components/reusable/GftButton';
import GftLink from 'components/reusable/GftLink';
import validationSchemas from 'helper/validationSchemas';

const LoginForm = ({
  initialValues={
    email: '',
    password: ''
  },
  onSubmit,
  loading
}) => {
  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: validationSchemas.login,
    validateOnChange: false,
    onSubmit: (values) => onSubmit(values)
  });

  return (
    <GftFormControl onSubmit={() => handleSubmit()}>
      <Grid container>
        <Grid item xs={12} pb={2.5}>
          <GftTextField
            autoFocus
            fullWidth
            label={'Email'}
            value={values.email}
            onChange={(e) => setFieldValue('email', e.target.value)}
            error={errors.email}
            errorMessage={errors.email}
          />
        </Grid>
        <Grid item xs={12} pb={2.5}>
          <GftPasswordField
            fullWidth
            label={'Password'}
            value={values.password}
            onChange={(e) => setFieldValue('password', e.target.value)}
            error={errors.password}
            errorMessage={errors.password}
          />
        </Grid>
        <Grid item xs={12} pb={1.25}>
          <GftButton
            fullWidth
            type={'submit'}
            loading={loading}
          >
            Login
          </GftButton>
        </Grid>
        <Grid item xs={12} p={1.5}>
          <Typography
            textAlign={'center'}
          >
            Not yet registered? <GftLink to={'/create_account'}>Sign up now</GftLink>
          </Typography>
        </Grid>
      </Grid>
    </GftFormControl>
  );
}

export default LoginForm;