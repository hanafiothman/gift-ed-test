import { Box, Typography } from '@mui/material';
import Logo from 'assets/jpg/logo.jpeg';
import GftButton from 'components/reusable/GftButton';
import GftLink from 'components/reusable/GftLink';
import useAuth from 'hooks/useAuth';

export const NAVBAR_HEIGHT = 75;

const Navbar = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    const yesLogout = confirm('Are you sure to log out? :(');
    if(yesLogout) {
      logout();
    }
  }

	return (
		<Box
      component={'nav'}
			sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 1,
        px: 2,
        borderBottom: 1,
        borderColor: 'grayLine',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: NAVBAR_HEIGHT,
        backgroundColor: 'white'
      }}
		>
      <GftLink
        to={'/dashboard'}
      >
        <Box
          component={'img'}
          src={Logo}
          height={40}
          sx={{
            objectFit: 'contain'
          }}
        />
      </GftLink>
      <GftButton
        variant={'ghost'}
        onClick={() => handleLogout()}
      >
        <Typography>Log out</Typography>
      </GftButton>
		</Box>
	);
}

export default Navbar;