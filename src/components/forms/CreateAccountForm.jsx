import { Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';
import GftFormControl from 'components/reusable/GftFormControl';
import GftTextField from 'components/reusable/GftTextField';
import GftPasswordField from 'components/reusable/GftPasswordField';
import GftButton from 'components/reusable/GftButton';
import GftLink from 'components/reusable/GftLink';
import validationSchemas from 'helper/validationSchemas';

const CreateAccountForm = ({
  initialValues={
    name: '',
    email: '',
    password: ''
  },
  onSubmit,
  loading
}) => {
  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: validationSchemas.createAccount,
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
            label={'Full name'}
            value={values.name}
            onChange={(e) => setFieldValue('name', e.target.value)}
            error={errors.name}
            errorMessage={errors.name}
          />
        </Grid>
        <Grid item xs={12} pb={2.5}>
          <GftTextField
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
            displayStrength
          />
        </Grid>
        <Grid item xs={12} pb={1.25}>
          <GftButton
            fullWidth
            type={'submit'}
            loading={loading}
          >
            Continue
          </GftButton>
        </Grid>
        <Grid item xs={12} p={1.5}>
          <Typography
            textAlign={'center'}
          >
            Already have account? <GftLink to={'/login'}>Login</GftLink>
          </Typography>
        </Grid>
      </Grid>
    </GftFormControl>
  );
}

export default CreateAccountForm;