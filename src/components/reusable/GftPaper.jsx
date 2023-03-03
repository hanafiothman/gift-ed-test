import { Paper } from '@mui/material';

const GftPaper = ({
  children, 
  sx,
  ...rest
}) => {
  return (
    <Paper
      sx={(theme) => ({
        borderRadius: 0.6,
        boxShadow: 'none',
        ...typeof sx === 'function' ? sx(theme) : sx
      })}
      {...rest}
    >
      {children}
    </Paper>
  );
}

export default GftPaper;