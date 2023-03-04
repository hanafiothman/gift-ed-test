import { Box } from '@mui/material';
import Navbar, { NAVBAR_HEIGHT } from 'components/layout/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Box 
      component={'main'}
      sx={{
        backgroundColor: 'grayBackground',
        flexGrow: 1,
        minHeight: '100vh'
      }}
    >
      <Navbar/>
      <Box
        width={'100%'}
        pt={`${NAVBAR_HEIGHT}px`}
        px={2}
      >
        <Outlet/>
      </Box>
    </Box>
  );
}

export default Layout;