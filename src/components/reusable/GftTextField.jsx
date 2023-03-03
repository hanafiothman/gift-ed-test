import { Box, InputAdornment, TextField } from '@mui/material';

const SIZES = {
  input: {
    large: {
      minHeight: 65,
      height: 65,
      px: 2,
    },
    standard: {
      minHeight: 45,
      height: 45,
      px: 1.75,
    },
  },
  label: {
    large: {
      fontSize: 16,
      pb: 1,
    },
    standard: {
      fontSize: 14,
      pb: 1,
    },
  },
};

const getLabelStyles = (size, readOnly=false) => {
  return {
    fontWeight: 'bold',
    transform: 'unset',
    transformOrigin: 'unset',
    position: 'unset',
    top: 'unset',
    left: 'unset',
    color: 'darkText',
    ...SIZES.label[size],
    '&.Mui-focused': {
      color: 'darkText',
    },
    '&.Mui-disabled': {
      color: readOnly ? 'darkText' : 'lightGrayText',
    },
    '&.Mui-error': {
      color: 'stateRed.main',
    },
  };
};

const getInputStyles = (size, sxInput, readOnly=false) => {
  return {
    mt: '0 !important',
    border: 1,
    borderColor: 'lightGrayText',
    backgroundColor: 'grayBackground',
    color: 'darkText',
    ...SIZES.input[size],
    '&.MuiInputBase-multiline': {
      height: 'unset',
      py: 1.25
    },
    '&.Mui-disabled': {
      borderColor: 'grayLine',
      color: readOnly ? 'darkText' : 'lightGrayText'
    },
    '&.Mui-error': {
      borderColor: 'stateRed.main',
      color: 'stateRed.main',
    },
    ...sxInput,
  };
};

const getInputElementStyles = (size) => {
  return {
    p: 0,
    height: '100%',
    fontSize: size === 'large' ? '16px' : '14px',
    lineHeight: 1.5,
    '&.Mui-disabled': {
      'WebkitTextFillColor': 'unset'
    }
  };
};

const getHelperTextStyles = (size) => {
  return {
    color: 'lightGrayText',
    mt: 1,
    fontSize: size === 'large' ? 14 : 12,
    '&.Mui-disabled': {
      color: 'grayInactive',
    },
    '&.Mui-error': {
      color: 'stateRed.main',
    },
  };
};

const getAdornmentStyles = () => {
  return {
    color: 'inherit',
    borderColor: 'inherit',
  };
};

const GftTextField = ({
  label = '',
  size = 'standard',
  InputLabelProps = {},
  InputProps = {},
  inputProps = {},
  error,
  errorMessage = '',
  helperText = '',
  FormHelperTextProps = {},
  multiline,
  endAdornment = null,
  startAdornment = null,
  disabled = false,
  readOnly = false,
  sxInput,
  onChange,
  value,
  select,
  required=false,
  ...rest
}) => {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e)}
      select={select}
      variant={'standard'}
      label={
        label ?
        <>
          {label}{required ? <Box component={'span'} color={'primary.main'} fontWeight={'bold'}>*</Box> : null}
        </>
        : null
      }
      size={size}
      multiline={multiline}
      error={error ? true : false}
      helperText={error ? errorMessage : helperText}
      InputLabelProps={{
        disableAnimation: true,
        shrink: true,
        sx: getLabelStyles(size, readOnly),
        ...InputLabelProps,
      }}
      inputProps={{
        sx: getInputElementStyles(size),
        ...inputProps,
      }}
      FormHelperTextProps={{
        sx: getHelperTextStyles(size),
        ...FormHelperTextProps,
      }}
      InputProps={{
        disableUnderline: true,
        startAdornment: startAdornment ? (
          <InputAdornment position={'start'} sx={getAdornmentStyles()}>
            {startAdornment}
          </InputAdornment>
        ) : null,
        endAdornment: endAdornment ? (
          <InputAdornment position={'end'} sx={getAdornmentStyles()}>
            {endAdornment}
          </InputAdornment>
        ) : null,
        ...InputProps,
        sx: {...getInputStyles(size, sxInput, readOnly), ...InputProps.sx},
      }}
      disabled={readOnly || disabled}
      {...rest}
    />
  );
};

export default GftTextField;
