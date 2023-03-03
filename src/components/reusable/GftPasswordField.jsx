import { Box, Icon, IconButton, LinearProgress, Typography } from '@mui/material';
import { ONE_NUM_OR_SYMBOL_REGEX, ONE_UPP_AND_LOW_REGEX } from 'helper/constants';
import { useState } from 'react';
import GftTextField from './GftTextField';

const GftPasswordField = ({
  value='',
  onChange,
  IconButtonProps,
  IconProps,
  displayStrength=false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const min8Char = value.length >= 8;
  const includeUpLoCase = ONE_UPP_AND_LOW_REGEX.test(value);
  const includeOneNumSym = ONE_NUM_OR_SYMBOL_REGEX.test(value);

  return (
    <>
      <GftTextField
        value={value}
        onChange={(e) => onChange(e)}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          value ?
          <IconButton
            onClick={() => setShowPassword(!showPassword)}
            {...IconButtonProps}
          >
            <Icon {...IconProps}>
              { showPassword ? 'visibility' : 'visibility_off'}
            </Icon>
          </IconButton>
          :
          null
        }
        {...rest}
      />
      { displayStrength && (
      <Box width={'100%'} pt={2}>
        <Typography variant={'body2'} mb={1}>
          Password strength
        </Typography>
        <LinearProgress
          variant={'determinate'}
          value={([min8Char, includeUpLoCase, includeOneNumSym].filter((value) => value).length/3) * 100}
          color={'stateGreen'}
          sx={{
            backgroundColor: 'grayLine'
          }}
        />
        <Box component={'ul'} pl={2}>
          {[
            'Minimum 8 characters',
            'Include a mix of uppercase AND lowercase letters',
            'Include one or more number OR symbol'
          ].map((e,i) => (
            <Box key={i} component={'li'}>
              <Typography variant={'body2'}>{e}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      )}
    </>
  );
}

export default GftPasswordField;