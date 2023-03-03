import { Box, Grid } from '@mui/material';
import GftLink from 'components/reusable/GftLink';
import GftPaper from 'components/reusable/GftPaper';
import { Outlet } from 'react-router-dom';
import Logo from 'assets/jpg/logo.jpeg';

const AuthLayout = () => {
	return (
    <Box
      sx={{
        p: 0,
        backgroundColor: 'black'
      }}
    >
      <Grid container sx={{height: '100vh'}}>
        <Grid
          item
          xs={12}
          sx={(theme) => ({
            px: 8,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
              py: 10,
              px: 4
            }
          })}
        >
          <GftPaper
            sx={(theme) => ({
              px: 5,
              py: 3,
              width: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              [theme.breakpoints.down('sm')]: {
                width: '80%'
              }
            })}
          >
            <GftLink
              to={'/'}
            >
              <Box
                component={'img'}
                src={Logo}
                height={50}
                sx={{
                  objectFit: 'contain'
                }}
              />
            </GftLink>
            <Box
              width={'100%'}
              pt={2}
            >
              <Outlet/>
            </Box>
          </GftPaper>
        </Grid>
      </Grid>
    </Box>
	);
}

export default AuthLayout;