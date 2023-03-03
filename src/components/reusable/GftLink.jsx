import { Link } from '@mui/material';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const GftLink = forwardRef(({
  children,
  to='/',
  color='lightGrayText',
  ...rest
}, _) => {
  return (
    <Link
      component={RouterLink}
      to={to}
      color={color}
      {...rest}
    >
      {children}
    </Link>
  );
});

export default GftLink;