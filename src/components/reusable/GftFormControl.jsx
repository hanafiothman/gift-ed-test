import { FormControl } from '@mui/material';

const GftFormControl = ({ children, onSubmit, ...rest }) => {
  return (
    <FormControl
      component={'form'}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      fullWidth
      {...rest}
    >
      {children}
    </FormControl>
  );
}

export default GftFormControl;